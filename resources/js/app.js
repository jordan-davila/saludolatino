window._ = require("lodash");
window.Popper = require("popper.js").default;
window.axios = require("axios");
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.Vue = require("vue");

import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import VModal from "vue-js-modal";
import VueVideoPlayer from "vue-video-player";
import "video.js/dist/video-js.css";
import VueSocialSharing from "vue-social-sharing";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VModal);
Vue.use(VueVideoPlayer);
Vue.use(VueSocialSharing);

const app = new Vue({
    el: "#app"
});
