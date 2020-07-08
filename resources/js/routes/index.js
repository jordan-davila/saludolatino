import Home from "./pages/Home";
import Stars from "./pages/Stars";
import Profile from "./pages/Profile";
import Videos from "./pages/Videos";
import Request from "./pages/Request";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Subscribe from "./pages/Subscribe";
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
            path: "/ingresar",
            name: "ingresar",
            component: Login,
            meta: {
                middleware: [page, guest]
            }
        },
        {
            path: "/inscribete",
            name: "inscribete",
            component: Subscribe,
            meta: {
                middleware: [page, guest]
            }
        },
        {
            path: "/registrate",
            name: "registrate",
            component: Register,
            meta: {
                middleware: [page, guest]
            }
        },
        {
            path: "/estrella/:star",
            component: Profile,
            name: "profile",
            redirect: "/estrella/:star/videos",
            children: [
                {
                    path: "videos",
                    name: "videos",
                    component: Videos,
                    meta: {
                        middleware: [page, guest]
                    }
                },
                {
                    path: "peticion",
                    name: "request",
                    component: Request,
                    meta: {
                        // Change this to auth
                        middleware: [page, guest]
                    }
                }
            ]
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
