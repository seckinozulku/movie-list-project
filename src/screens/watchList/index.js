import React, {useContext} from "react";
import Menu from "../../components/HomeMenu";
import {GlobalContext} from "../../context/GlobalState";
import MovieList from "../../components/MovieList";
import {Content, ContentWrapper} from "../../components/Layout/style";
import {useHistory} from "react-router-dom";

const WatchList = () => {
	const {watchList} = useContext(GlobalContext);
	const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
	const history = useHistory();

	if(!isLoggedIn) {
		history.push("/login");
	}

	return (
		<>
			<Menu/>
			<Content withMenu>
				<ContentWrapper size={100}>
					<MovieList movies={watchList} isWatchList/>
				</ContentWrapper>
			</Content>
		</>
	);
};

export default WatchList;
