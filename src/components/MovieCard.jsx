import React, { useState } from 'react'

const MovieCard = ({ posterPath }) => {
    const [imageError, setImageError] = useState(false)

    if (imageError || !posterPath) {
        return (
            <div className="w-56 h-80 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-gray-400">No Image</span>
            </div>
        )
    }

    return (
        <div className="w-56 h-80 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-200">
            <img 
                src={`https://image.tmdb.org/t/p/w500${posterPath}`} 
                alt="Movie Poster" 
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
            />
        </div>
    )
}

export default MovieCard