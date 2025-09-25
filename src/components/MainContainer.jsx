import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if(!movies || movies.length === 0) {
        return (
            <div className="w-screen h-screen bg-black flex items-center justify-center">
                <div className="text-white text-xl">Loading movies...</div>
            </div>
        );
    }

    const mainMovie = movies[0]
    console.log(mainMovie)

    const {title, overview, id} = mainMovie;

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <VideoBackground movieId={id} />
            <VideoTitle title={title} overview={overview} />
        </div>
    )
}

export default MainContainer