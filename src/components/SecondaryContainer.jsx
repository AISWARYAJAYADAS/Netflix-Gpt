import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
    const popularMovies = useSelector(store => store.movies?.popularMovies);
    const trendingMovies = useSelector(store => store.movies?.trendingMovies);

    return (
        <div className="relative z-10 bg-black">
            <MovieList title="Now Playing" movies={nowPlayingMovies}/>
            <MovieList title="Popular" movies={popularMovies}/>
            <MovieList title="Trending" movies={trendingMovies}/>
        </div>
    )
}

export default SecondaryContainer