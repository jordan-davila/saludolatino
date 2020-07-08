<template>
    <div id="home-smooth-scroll" class="content-container flex flex-col w-full h-full overflow-y-auto">
        <div class="p-20 border-b border-solid border-gray-700">
            <TitleBar></TitleBar>
            <StarCardsLoader :limit="8" v-show="starsloading"></StarCardsLoader>
            <StarCards :limit="8" initialCategory="destacados" v-show="!starsloading"></StarCards>
        </div>
        <div class="p-20 border-b border-solid border-gray-700">
            <StarCardsLoader :limit="8" v-show="starsloading"></StarCardsLoader>
            <StarCards :limit="8" initialCategory="destacados" v-show="!starsloading"></StarCards>
        </div>
        <div class="p-20 border-b border-solid border-gray-700">
            <StarPromotion></StarPromotion>
        </div>
        <div class="p-20 border-b border-solid border-gray-700">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import TitleBar from "../../components/TitleBar";
import StarCards from "../../components/StarCards";
import StarCardsLoader from "../../components/StarCardsLoader";
import StarPromotion from "../../components/StarPromotion";
import Footer from "../../components/Footer";
import Scrollbar from "smooth-scrollbar";

export default {
    components: { TitleBar, StarCards, Footer, StarCardsLoader, StarPromotion },
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
        Scrollbar.init(document.querySelector("#home-smooth-scroll"), {
            damping: 0.1,
            renderByPixels: true,
            alwaysShowTracks: false,
            continuousScrolling: true
        });
    }
};
</script>
