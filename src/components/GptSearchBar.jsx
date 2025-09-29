import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector ,useDispatch} from 'react-redux'
import { groqClient } from '../utils/groqClient'
import { API_KEY } from '../utils/constants'
import { addGptMovieResult, clearGptResults } from '../utils/gptSlice'
import { Search } from 'lucide-react'


const GptSearchBar = () => {
    const languageKey = useSelector(store => store.config.language)
    const searchText = useRef(null)
    const dispatch = useDispatch()

const searchMovieInTMDB = async (movieName) => {
  try {
    const encodedMovieName = encodeURIComponent(movieName)
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodedMovieName}&include_adult=false&language=en-US&page=1`
    
    const response = await fetch(url)
    const data = await response.json()
    
    if (!data.results || data.results.length === 0) {
      return null
    }
    
    // Find the best match using multiple strategies
    const bestMatch = data.results.find(movie => {
      const movieTitle = movie.title.toLowerCase()
      const searchTitle = movieName.toLowerCase()
      
      // 1. Exact match
      if (movieTitle === searchTitle) return true
      
      // 2. Contains match (most important for your use case)
      if (movieTitle.includes(searchTitle)) return true
      
      // 3. Reverse contains (search term contains movie title)
      if (searchTitle.includes(movieTitle)) return true
      
      return false
    })
    
    // If no good match found, use the first result (best from TMDB)
    const result = bestMatch || data.results[0]
    
    
    return result
    
  } catch (error) {
    console.error(`Error searching for "${movieName}":`, error)
    return null
  }
}


  const handleGptSearchSubmit = async (e) => {
    e.preventDefault()
    const query = searchText.current.value.trim()

    try{

    const gptQuery = `Act as a movie recommendation system. 
      Suggest 5 movies for the query: "${query}"
      Only provide movie names, comma-separated like this: "movie1, movie2, movie3, movie4, movie5"
      Do not include any other text or explanations.`

      const gptResponse = await groqClient.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'llama-3.3-70b-versatile', 
        temperature: 0.7,
        max_tokens: 150
      })

      const movieNames = gptResponse.choices?.[0]?.message?.content

      const gptMovies = movieNames.split(',').map(movie => movie.trim())

      // for each movie namme make api call to fetch movie details from TMDB search api
      const movies = await Promise.all(gptMovies.map(movie => searchMovieInTMDB(movie)))
      dispatch(addGptMovieResult({movieNames: gptMovies, movies: movies}))


        
    } catch (error) {
        console.log('Error:', error)
    }

  }

    const handleInputChange = () => {
    const query = searchText.current.value.trim()
    if (query === '') {
      dispatch(clearGptResults())
    }
  }

    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            <form onSubmit={handleGptSearchSubmit} className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <div className="relative flex-1 w-full">
                    <input
                        ref={searchText}
                        type="text" 
                        onChange={handleInputChange}
                        placeholder={lang[languageKey].gptSearchPlaceholder} 
                        className="w-full px-4 py-3 text-lg rounded-xl text-white bg-gray-800/90 border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 placeholder-gray-400 backdrop-blur-sm transition-all duration-300" 
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <Search className="w-5 h-5 text-gray-400" />
                    </div>
                </div>
                <button 
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500/50 shadow-lg"
                >
                    {lang[languageKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar