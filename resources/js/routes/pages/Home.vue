<template>
    <section class="container max-w-none bg-white flex h-screen">
        <MainMenu></MainMenu>
        <section class="flex flex-col h-full w-full overflow-hidden">
            <SubMenu></SubMenu>
            <div id="smooth-scroll" class="flex flex-col flex-1 overflow-y-auto px-16">
                <TitleBar></TitleBar>
                <StarCardsLoader v-show="starsloading"></StarCardsLoader>
                <StarCards initialCategory="destacados" v-show="!starsloading"></StarCards>
                <Footer></Footer>
            </div>
        </section>
    </section>
</template>

<script>
import MainMenu from "../components/MainMenu";
import SubMenu from "../components/SubMenu";
import TitleBar from "../components/TitleBar";
import StarCards from "../components/StarCards";
import StarCardsLoader from "../components/StarCardsLoader";
import Footer from "../components/Footer";
import Scrollbar from "smooth-scrollbar";

export default {
    components: { MainMenu, SubMenu, TitleBar, StarCards, Footer, StarCardsLoader },
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
        Scrollbar.init(document.querySelector("#smooth-scroll"), {
            damping: 0.1,
            renderByPixels: true,
            alwaysShowTracks: false,
            continuousScrolling: true
        });
    }
};
</script>
