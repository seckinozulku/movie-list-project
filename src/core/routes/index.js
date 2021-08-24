import {lazy} from "react";

const Home = lazy(() => import("../../screens/home"));
const Login = lazy(() => import("../../screens/login"));
const Watched = lazy(() => import("../../screens/watched"));
const WatchList = lazy(() => import("../../screens/watchList"));

export const routes = [
	{
		path: "/",
		Component: Home,
		requireAuth: false
	},
	{
		path: "/login",
		Component: Login,
	},
	{
		path: "/watched",
		Component: Watched,
		requireAuth: true
	},
	{
		path: "/watch-list",
		Component: WatchList,
		requireAuth: true
	}
];
