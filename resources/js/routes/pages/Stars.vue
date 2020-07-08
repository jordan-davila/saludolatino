<template>
    <div class="content-container flex w-full h-full overflow-hidden">
        <StarFilter></StarFilter>
        <div id="star-smooth-scroll" class="stars-container flex flex-col flex-1 overflow-y-auto">
            <Dots :rows="7" :cols="4" bgColor="bg-gray-700" accentColor="bg-indigo-600" class="absolute right-0 m-10"></Dots>
            <div class="p-20 border-b border-solid border-gray-700">
                <StarCardsLoader :limit="8" v-show="starsloading"></StarCardsLoader>
                <StarCards v-show="!starsloading"></StarCards>
            </div>
            <div class="p-20 border-b border-solid border-gray-700">
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
import StarFilter from "../../components/StarFilter";
import StarCards from "../../components/StarCards";
import StarCardsLoader from "../../components/StarCardsLoader";
import StarPaginator from "../../components/StarPaginator";
import Footer from "../../components/Footer";
import Scrollbar from "smooth-scrollbar";
import Dots from "../../components/Dots";

export default {
    components: { StarFilter, StarCards, StarCardsLoader, StarPaginator, Footer, Dots },
    computed: {
        starsloading: {
            get() {
                return this.$store.state.Users.starsloading;
            },
            set(value) {
                return this.$store.commit("setStarsLoading", value);
            }
        }
    },
    mounted() {
        Scrollbar.init(document.querySelector("#star-smooth-scroll"), {
            damping: 0.1,
            renderByPixels: true,
            alwaysShowTracks: false,
            continuousScrolling: true
        });
    },

    created() {
        this.getStars();
    },

    methods: {
        getStars() {
            const category = this.initialCategory ? this.initialCategory : this.$route.params.category;
            const page = this.$route.query.pagina ? this.$route.query.pagina : 1;
            this.$store.dispatch("fetchStars", { ...(category ? { category: category } : {}), ...(page ? { page: page } : {}) });
        }
    }
};
</script>
