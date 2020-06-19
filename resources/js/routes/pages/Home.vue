<template>
    <section class="container max-w-none bg-body flex h-screen">
        <MainMenu></MainMenu>
        <section class="flex flex-col h-full w-full overflow-hidden">
            <SubMenu></SubMenu>
            <div id="smooth-scroll" class="flex flex-col flex-1 overflow-y-auto px-16">
                <TitleBar></TitleBar>
                <StarCards initialCategory="destacados"></StarCards>
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
import Footer from "../components/Footer";
import Scrollbar from "smooth-scrollbar";

export default {
    components: { MainMenu, SubMenu, TitleBar, StarCards, Footer },
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
