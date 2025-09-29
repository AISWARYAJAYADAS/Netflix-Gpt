import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();



    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();

        const trailers = json.results.filter(trailer => trailer.type === "Trailer");

        const trailer =  trailers.length > 0 ? trailers[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideo();
    }, []);

}

export default useMovieTrailer;