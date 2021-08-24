import React, {useContext} from "react";
import Menu from "../../components/HomeMenu";
import {GlobalContext} from "../../context/GlobalState";
import MovieList from "../../components/MovieList";
import {Content, ContentWrapper} from "../../components/Layout/style";

const WatchList = () => {
	const {watchList} = useContext(GlobalContext);
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