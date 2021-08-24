import {SearchButton, SearchInput, SearchWrapper} from "./style";
import axios from "axios";

const SearchBar = ({ setMovies, setKeyword, keyword }) => {

	const handleOnChange = (value) => {
		setKeyword(value);
	};

	const searchMovies = () => {
		if (keyword) {
			axios
				.get("https://api.themoviedb.org/3/search/movie?api_key=6d8fe5128c46e6cf2cceb4b102530298&language=en-US&page=1&include_adult=false&query=" + keyword)
				.then((response) => {
					setMovies(response?.data?.results);
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	const enterPressed = (e) => {
		const code = e.keyCode || e.which;
		if(code === 13) {
			searchMovies();
		}
	};

	return (
		<SearchWrapper>
			<SearchInput
				onChange={(e) => handleOnChange(e?.target?.value)}
				value={keyword || ""}
				onKeyPress={(e) => enterPressed(e)}
				placeholder={"Search For A Movie , TV Show"}
			/>
			<SearchButton onClick={searchMovies}>Search</SearchButton>
		</SearchWrapper>
	);
};
export default SearchBar;