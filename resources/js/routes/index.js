import Home from "./pages/Home";
import Stars from "./pages/Stars";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FourZeroFour from "./pages/404";

import page from "./middleware/page";
import guest from "./middleware/guest";
import auth from "./middleware/auth";
import subscribed from "./middleware/subscribed";

export default {
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                middleware: [page]
            }
        },
        {
            path: "/estrellas/:category?",
            name: "estrellas",
            component: Stars,
            meta: {
                middleware: [page]
            }
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                middleware: [page, guest]
            }
        },
        {
            path: "/register",
            name: "register",
            component: Register,
            meta: {
                middleware: [page, guest]
            }
        },
        {
            path: "/profile/:talent",
            name: "profile",
            component: Profile,
            meta: {
                middleware: [page, guest]
            }
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard,
            meta: {
                middleware: [page, auth]
            }
        },
        {
            path: "/404",
            name: "404",
            component: FourZeroFour
        }
    ]
};
