import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addNowPlayingMovies, addPopularMovies, addTrendingMovies } from "../utils/movieSlice"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    
    const getNowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }

    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS)
        const json = await data.json()
        dispatch(addPopularMovies(json.results))
    }

    const getTrendingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/trending/movie/week?page=1", API_OPTIONS)
        const json = await data.json()
        dispatch(addTrendingMovies(json.results))
    }

    useEffect(() => {
        getNowPlayingMovies()
        getPopularMovies()
        getTrendingMovies()
    }, [])
}

export default useNowPlayingMovies