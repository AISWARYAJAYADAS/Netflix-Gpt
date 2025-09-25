import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({movieId}) => {
    
    // custom hook to fetch videos corresponding to the movie id and filter the trailer video and update the Redux store
    useMovieTrailer(movieId);
    
    // use selector to get trailer video from the Redux store
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    const mainMovie = movies?.[0];

    return (
        <div className='absolute inset-0 w-screen h-screen z-0'>
            {trailerVideo?.key ? (
                <iframe
                    className='absolute top-0 left-0 w-full h-full'
                    src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&start=0&enablejsapi=1`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    style={{ 
                        pointerEvents: 'none',
                        width: '100vw',
                        height: '100vh',
                        objectFit: 'cover',
                        transform: 'scale(1.1)',
                        transformOrigin: 'center center'
                    }}
                />
            ) : (
                <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original${mainMovie?.backdrop_path}`}
                    alt="Movie Backdrop"
                />
            )}
            
            {/* Simple dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
        </div>
    )
}

export default VideoBackground