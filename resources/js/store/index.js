import Vue from "vue";
import Vuex from "vuex";
import Users from "./modules/Users";

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        Users
    },
    computed: {
        modal() {
            return this.$modal;
        }
    }
});
