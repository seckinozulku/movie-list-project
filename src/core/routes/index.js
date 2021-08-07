import {lazy} from "react";

const Home = lazy(() => import("../../screens/home"))
const Login = lazy(() => import("../../screens/login"))
const Profile = lazy(() => import("../../screens/profile"))

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
        path: "/profile",
        Component: Profile,
        requireAuth: true
    }
]