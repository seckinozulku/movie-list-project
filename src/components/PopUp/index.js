import React, {useContext} from "react";
import {
	BackgroundImage,
	BackgroundOverlay,
	Poster,
	BackMovieTitle,
	PopupContent,
	PopUpWrapper,
	BackOverview,
	ContentWrapper,
	InfoText, InfoWrapper, DateText, Language, MoviePoster, WatchListAdd, WatchButtons,
} from "./style";
import CircularProgressBar from "../CircularProgressBar";
import {GlobalContext} from "../../context/GlobalState";

const PopUp = ({selectedMovie,isWatchList}) => {
	const {
		addMovieToWatchList,
		removeMovieFromWatchList,
		addMovieToWatched,
		removeMovieFromWatched,
		watchList,
		watched,
		genres
	} = useContext(GlobalContext);
	const isInWatchList = watchList?.find(item => item?.id === selectedMovie?.id);
	const isInWatched = watched?.find(item => item?.id === selectedMovie?.id);
	const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

	return (
		<PopUpWrapper isWatchList={isWatchList}>
			<PopupContent>
				<Poster>
					{selectedMovie?.poster_path ?
						<MoviePoster src={"https://image.tmdb.org/t/p/w500/" + selectedMovie?.poster_path}
							alt={selectedMovie?.title + " Poster"}/> :
						<MoviePoster src={"imageNotFound.svg"} notFound alt={"Not Found Poster"}/>
					}
				</Poster>
				<ContentWrapper>
					<BackMovieTitle>{selectedMovie?.title}</BackMovieTitle>

					<InfoWrapper>
						<DateText>{selectedMovie?.release_date}</DateText>
						<Language>({selectedMovie?.original_language})</Language>
						{selectedMovie?.genre_ids?.map((item) =>
							<InfoText>{genres?.find(genre => genre?.id === item)?.name}</InfoText>
						)}
					</InfoWrapper>

					{selectedMovie?.vote_average !== 0 && <CircularProgressBar rate={selectedMovie?.vote_average * 10}/>}
					{ isLoggedIn &&
					<WatchButtons>
						<WatchListAdd
							title={isInWatchList ? "Remove From Watchlist" : "Add To Watchlist"}
							onClick={() => isInWatchList ? removeMovieFromWatchList(selectedMovie?.id) : addMovieToWatchList(selectedMovie)}
							disabled={isInWatchList}
						>
							{isInWatchList ? "-" : "+"}
						</WatchListAdd>

						<WatchListAdd
							title={isInWatched ? "Remove From Watched" : "Add To Watched"}
							onClick={() =>isInWatched ? removeMovieFromWatched(selectedMovie?.id) : addMovieToWatched(selectedMovie)}
							disabled={isInWatched}
						>
							{isInWatched ? "x" : "✓"}
						</WatchListAdd>
					</WatchButtons>
					}
					<BackOverview>{selectedMovie?.overview}</BackOverview>
				</ContentWrapper>
			</PopupContent>
			<BackgroundImage src={"https://image.tmdb.org/t/p/w500/" + selectedMovie.backdrop_path}
				alt={selectedMovie?.title + " Background"} notFound={!selectedMovie.backdrop_pat}/>
			<BackgroundOverlay/>
		</PopUpWrapper>
	);

};
export default PopUp;
