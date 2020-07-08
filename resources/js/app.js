window.Vue = require("vue");
window._ = require("lodash");
window.axios = require("axios");
window.Popper = require("popper.js").default;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

// Libraries
import Vue from "vue";
import Vuex from "vuex";
import Routes from "./routes";
import Store from "./store";
import VueRouter from "vue-router";
import VModal from "vue-js-modal";
import VueVideoPlayer from "vue-video-player";
import VueSocialSharing from "vue-social-sharing";
import middlewarePipeline from "./routes/middleware/middlewarePipeline";

// Components
import MainMenu from "./components/MainMenu";
import SubMenu from "./components/SubMenu";

// Use Libraries
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VModal);
Vue.use(VueVideoPlayer);
Vue.use(VueSocialSharing);

// Use Components
Vue.component("MainMenu", MainMenu);
Vue.component("SubMenu", SubMenu);

const Router = new VueRouter(Routes);

// Middleware Controller
Router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) return next();
    const middleware = to.meta.middleware;
    const context = { to, from, next, Store };
    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1),
    });
});

const app = new Vue({
    el: "#app",
    router: Router,
    store: Store,
});
