export default (state, action) => {
	switch (action.type) {
		case "ADD_MOVIE_TO_WATCHLIST":
			return {
				...state,
				watchList: [action.payload, ...state.watchList]
			};
		case "REMOVE_MOVIE_FROM_WATCHLIST":
			return {
				...state,
				watchList: state.watchList.filter(movie => movie.id !== action.payload)
			};
		case "ADD_MOVIE_TO_WATCHED":
			return {
				...state,
				watched: [action.payload, ...state.watched]
			};
		case "REMOVE_MOVIE_FROM_WATCHED":
			return {
				...state,
				watched: state.watched.filter(movie => movie.id !== action.payload)
			};
		case "ADD_GENRES":
			return {
				...state,
				genres: action.payload
			};
		default:
			return state;
	}
};