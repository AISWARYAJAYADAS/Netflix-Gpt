import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    if (!movies || movies.length === 0) {
        return (
            <div className="px-6 mb-12">
                <h2 className='text-white text-2xl font-bold mb-6'>{title}</h2>
                <div className="text-gray-400">Loading...</div>
            </div>
        )
    }

    return (
        <div className="px-6 mb-12">
            <h2 className='text-white text-2xl font-bold mb-6'>{title}</h2>
            <div className='relative'>
                <div className='flex gap-4 overflow-x-auto scrollbar-hide pb-4 pr-4'>
                    {movies.map(movie => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList