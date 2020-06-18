import Vue from "vue";
import Vuex from "vuex";
import Users from "./modules/Users";
import Categories from "./modules/Categories";

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        Users,
        Categories
    },
    computed: {
        modal() {
            return this.$modal;
        }
    }
});
