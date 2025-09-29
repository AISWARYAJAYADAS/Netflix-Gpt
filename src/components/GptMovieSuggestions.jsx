import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const GptMovieSuggestions = () => {
    const {gptMovieNames, gptMovieResults} = useSelector(store => store.gpt)
    
    // Hide component if no data
    if (!gptMovieNames || gptMovieNames.length === 0 || !gptMovieResults || gptMovieResults.length === 0) {
        return null
    }
    
    return (
        <div className="px-6 py-8">
            <h1 className="text-white text-3xl font-bold mb-8">Movie Recommendations</h1>
            
            {/* Professional responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {gptMovieNames.map((movieName, index) => {
                    const movieData = gptMovieResults[index]
                    
                    return (
                        <div key={index} className="relative">
                            {/* Show movie name */}
                            <div className="mb-3">
                                <p className="text-yellow-400 text-sm font-medium text-center">
                                    {movieName}
                                </p>
                            </div>
                            
                            {/* Movie card */}
                            {movieData ? (
                                <div className="transform hover:scale-105 transition-transform duration-300">
                                    <MovieCard 
                                        posterPath={movieData.poster_path}
                                        title={movieData.title}
                                        overview={movieData.overview}
                                        releaseDate={movieData.release_date}
                                        voteAverage={movieData.vote_average}
                                    />
                                </div>
                            ) : (
                                <div className="bg-gray-800 rounded-xl p-6 text-center h-80 flex flex-col justify-center border border-gray-700">
                                    <div className="text-gray-400 text-4xl mb-3">🎬</div>
                                    <p className="text-gray-400 text-sm mb-2">Movie not found</p>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GptMovieSuggestions