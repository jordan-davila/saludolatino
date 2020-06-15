window._ = require("lodash");
window.Popper = require("popper.js").default;
window.axios = require("axios");
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.Vue = require("vue");

import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VModal from "vue-js-modal";
import VueVideoPlayer from "vue-video-player";
import "video.js/dist/video-js.css";
import VueSocialSharing from "vue-social-sharing";
import Routes from "./routes";
import Store from "./store";
import middlewarePipeline from "./routes/middleware/middlewarePipeline";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VModal);
Vue.use(VueVideoPlayer);
Vue.use(VueSocialSharing);

const Router = new VueRouter(Routes);

// Middleware Controller
Router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) return next();
    const middleware = to.meta.middleware;
    const context = { to, from, next, Store };
    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    });
});

const app = new Vue({
    el: "#app",
    router: Router,
    store: Store
});
