import {useEffect, useState} from 'react';
import axios from "axios";
import {MovieCard, MovieImage, MovieListWrapper, MovieRelease, MovieTitle} from "./style";
import CircularProgressBar from "../CircularProgressBar";
import PopUp from "../PopUp";

const MovieList = () => {
    const [movies, setMovies] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const getData = () => {
        axios
            .get("https://api.themoviedb.org/3/discover/movie?api_key=6d8fe5128c46e6cf2cceb4b102530298&page=1")
            .then((response) => {
                setMovies(response?.data?.results)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const handleMovieSelect = (id) => {
        setSelectedMovie(movies.find((item) => item.id === id))
        setIsPopupOpen(!isPopupOpen);
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        document.addEventListener("click", () => setIsPopupOpen(false));
        return () => {
            document.removeEventListener("click",() => setIsPopupOpen(false));
        };
    }, []);

    return (
        <MovieListWrapper onClick={(e) => e.stopPropagation()}>
            {movies?.map((movie) => (
                <MovieCard key={movie?.id} onClick={() => handleMovieSelect(movie?.id)}>
                    <MovieImage src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}/>
                    {movie?.vote_average !== 0 && <CircularProgressBar rate={movie?.vote_average * 10}/>}
                    <MovieTitle>{movie?.title}</MovieTitle>
                    <MovieRelease> {movie.release_date}</MovieRelease>
                </MovieCard>
            ))}
            {isPopupOpen && selectedMovie && <PopUp setIsPopupOpen={setIsPopupOpen} selectedMovie={selectedMovie}/>}
        </MovieListWrapper>
    );
};

export default MovieList;
