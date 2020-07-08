<template>
    <div id="profile-smooth-scroll" class="stars-container flex flex-col flex-1 overflow-y-auto relative w-full">
        <Dots :rows="7" :cols="4" bgColor="bg-gray-700" accentColor="bg-indigo-600" class="absolute right-0 m-10"></Dots>
        <div class="p-20 border-b border-solid border-gray-700">
            <StarCardsLoader :limit="8" v-show="starsloading"></StarCardsLoader>
            <StarVideos v-show="!starsloading"></StarVideos>
        </div>
        <div class="p-20 border-b border-solid border-gray-700">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import StarInfo from "../../components/StarInfo";
import StarVideos from "../../components/StarVideos";
import StarCardsLoader from "../../components/StarCardsLoader";
import VideoPlayer from "../../modals/VideoPlayer";
import Scrollbar from "smooth-scrollbar";
import Footer from "../../components/Footer";
import Dots from "../../components/Dots";

export default {
    components: { StarInfo, StarVideos, StarCardsLoader, Footer, Dots, VideoPlayer },
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

    created() {
        this.$store.dispatch("fetchStar", this.$route.params.star);
    },

    mounted() {
        Scrollbar.init(document.querySelector("#profile-smooth-scroll"), {
            damping: 0.1,
            renderByPixels: true,
            alwaysShowTracks: false,
            continuousScrolling: true
        });
    }
};
</script>
