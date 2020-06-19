import Home from "./pages/Home";
import Stars from "./pages/Stars";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FourZeroFour from "./pages/404";

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
            component: Home
        },
        {
            path: "/estrellas/:category?",
            name: "estrellas",
            component: Stars
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                middleware: [guest]
            }
        },
        {
            path: "/register",
            name: "register",
            component: Register,
            meta: {
                middleware: [guest]
            }
        },
        {
            path: "/profile/:talent",
            name: "profile",
            component: Profile,
            meta: {
                middleware: [guest]
            }
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard,
            meta: {
                middleware: [auth]
            }
        },
        {
            path: "/404",
            name: "404",
            component: FourZeroFour
        }
    ]
};
