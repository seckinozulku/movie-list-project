import {useContext, useEffect, useState} from "react";
import {
	LoadMoreButton,
	MovieCard,
	MovieListWrapper, MovieNotFound,
	MoviePoster,
	MovieRelease,
	MovieTitle,
	Poster,
} from "./style";
import CircularProgressBar from "../CircularProgressBar";
import PopUp from "../PopUp";
import Loading from "../Loading";

const MovieList = ({page, isLoading, setPage, movies, keyword, isWatchList}) => {
	const [selectedMovie, setSelectedMovie] = useState(null);
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handleMovieSelect = (id) => {
		setSelectedMovie(movies.find((item) => item.id === id));
		setIsPopupOpen(!isPopupOpen);
	};

	const handleLoadMore = () => {
		setPage(page + 1);
	};

	useEffect(() => {
		document.addEventListener("click", () => setIsPopupOpen(false));
		return () => {
			document.removeEventListener("click", () => setIsPopupOpen(false));
		};
	}, []);

	return (
		<>
			{isLoading && <Loading/>}
			<MovieListWrapper  onClick={(e) => e.stopPropagation()} isWatchList={isWatchList}>
				{(!movies || movies?.length === 0) && !isLoading &&<MovieNotFound>Movies Not Found!</MovieNotFound>}
				{movies?.map((movie) => (
					<MovieCard key={movie?.id} onClick={() => handleMovieSelect(movie?.id)}>
						<Poster>
							{movie?.poster_path ?
								<MoviePoster src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}/> :
								<MoviePoster src={"imageNotFound.svg"} notFound/>
							}
						</Poster>
						{movie?.vote_average !== 0 && <CircularProgressBar rate={movie?.vote_average * 10}/>}
						<MovieTitle>{movie?.title}</MovieTitle>
						<MovieRelease> {movie.release_date}</MovieRelease>
					</MovieCard>
				))}
				{isPopupOpen && selectedMovie && <PopUp selectedMovie={selectedMovie} isWatchList={isWatchList}/>}
			</MovieListWrapper>
			{!keyword && movies?.length > 0 && !isWatchList && <LoadMoreButton onClick={handleLoadMore}>Daha Fazla Yükle</LoadMoreButton>}
		</>
	);
};

export default MovieList;
