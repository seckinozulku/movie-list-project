import {useContext, useEffect, useState} from "react";
import Menu from "../../components/HomeMenu";
import MovieList from "../../components/MovieList";
import {Content, ContentWrapper} from "../../components/Layout/style";
import Filters from "../../components/Filters";
import axios from "axios";
import SearchBar from "../../components/SearchBar";
import {GlobalContext} from "../../context/GlobalState";
import Loading from "../../components/Loading";

const Home = () => {
	const {addGenres} = useContext(GlobalContext);
	const [page, setPage] = useState(1);
	const [movies, setMovies] = useState([]);
	const [keyword, setKeyword] = useState(null);
	const [isLoading,setIsLoading] = useState(true);
	const [filters, setFilters] = useState({
		sortByFilter: null,
		genresFilter: null,
		rateFilter: null,
	});
	const {sortByFilter, genresFilter, rateFilter} = filters;

	const getGenres = () => {
		axios
			.get("https://api.themoviedb.org/3/genre/movie/list?api_key=6d8fe5128c46e6cf2cceb4b102530298")
			.then((response) => {
				addGenres(response?.data?.genres);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const getData = (isFilter) => {
		axios
			.get("https://api.themoviedb.org/3/discover/movie?api_key=6d8fe5128c46e6cf2cceb4b102530298&include_adult=false&language=en-US" +
            (page ? "&page=" + page : "&page=1") +
            (sortByFilter ? "&sort_by=" + sortByFilter : "") +
            (genresFilter ? "&with_genres=" + genresFilter?.join() : "") +
            (rateFilter ? "&vote_average.gte=" + rateFilter : ""))
			.then((response) => {
				if(isFilter) {
					setMovies(response?.data?.results);
				} else {
					setMovies(movies.concat(response?.data?.results));
				}
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	useEffect(() => {
		getGenres([]);
	}, []);

	useEffect(() => {
		getData(false);
	}, [page]);

	useEffect(() => {
		setKeyword(null);
		setMovies([]);
		if (page === 1) {
			getData(true);
		} else {
			setPage(1);
		}
	}, [filters]);

	return (
		<>
			<Menu/>
			<SearchBar setMovies={setMovies} setKeyword={setKeyword} keyword={keyword}/>
			<Content>
				<ContentWrapper size={20}>
					<Filters setFilters={setFilters} filters={filters}/>
				</ContentWrapper>
				<ContentWrapper size={80}>
					<MovieList isLoading={isLoading} page={page} setPage={setPage} movies={movies} keyword={keyword}/>
				</ContentWrapper>
			</Content>
		</>
	);
};

export default Home;
