import {lazy} from "react";

const Home = lazy(() => import("../../screens/home"));
const Login = lazy(() => import("../../screens/login"));
const Watched = lazy(() => import("../../screens/watched"));
const WatchList = lazy(() => import("../../screens/watchList"));

export const routes = [
	{
		path: "/",
		Component: Home,
	},
	{
		path: "/login",
		Component: Login,
	},
	{
		path: "/watched",
		Component: Watched,
	},
	{
		path: "/watch-list",
		Component: WatchList,
	}
];
