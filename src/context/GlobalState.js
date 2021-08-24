import {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
	watchList: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
	watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
	genres: localStorage.getItem("genres") ? JSON.parse(localStorage.getItem("genres")) : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	useEffect(() => {
		localStorage.setItem("watchlist", JSON.stringify(state.watchList));
		localStorage.setItem("watched", JSON.stringify(state.watched));
		localStorage.setItem("genres", JSON.stringify(state.genres));
	}, [state]);

	//actions
	const addMovieToWatchList = (movie) => {
		dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
	};
	const removeMovieFromWatchList = (movieId) => {
		dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: movieId});
	};
	const addMovieToWatched = (movie) => {
		dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie});
	};
	const removeMovieFromWatched = (movieId) => {
		dispatch({type: "REMOVE_MOVIE_FROM_WATCHED", payload: movieId});
	};
	const addGenres = (genre) => {
		dispatch({type: "ADD_GENRES", payload: genre});
	};

	return (
		<GlobalContext.Provider
			value={{
				watchList: state.watchList,
				watched: state.watched,
				genres: state.genres,
				addMovieToWatchList,
				removeMovieFromWatchList,
				addMovieToWatched,
				removeMovieFromWatched,
				addGenres}}>
			{props.children}
		</GlobalContext.Provider>
	);
};