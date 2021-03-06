import React, {useContext} from "react";
import Menu from "../../components/HomeMenu";
import {Content, ContentWrapper} from "../../components/Layout/style";
import MovieList from "../../components/MovieList";
import {GlobalContext} from "../../context/GlobalState";
import {useHistory} from "react-router-dom";

const Watched = () => {
	const {watched} = useContext(GlobalContext);
	const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
	const history = useHistory();

	if (!isLoggedIn) {
		history.push("/login");
	}

	return (
		<div>
			<Menu />
			<Content withMenu>
				<ContentWrapper size={100}>
					<MovieList movies={watched} isWatchList/>
				</ContentWrapper>
			</Content>
		</div>
	);
};

export default Watched;
