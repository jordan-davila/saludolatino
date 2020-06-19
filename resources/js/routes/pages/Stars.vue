<template>
    <section class="container max-w-none bg-body flex h-screen">
        <StarMenu></StarMenu>
        <section class="flex flex-col h-full w-full overflow-hidden">
            <SubMenu></SubMenu>
            <div id="smooth-scroll" class="flex flex-col flex-1 overflow-y-auto px-16">
                <StarTitleBar></StarTitleBar>
                <StarCards></StarCards>
                <StarPaginator></StarPaginator>
                <Footer></Footer>
            </div>
        </section>
    </section>
</template>

<script>
import StarMenu from "../components/StarMenu";
import SubMenu from "../components/SubMenu";
import StarTitleBar from "../components/StarTitleBar";
import StarCards from "../components/StarCards";
import StarPaginator from "../components/StarPaginator";
import Footer from "../components/Footer";
import Scrollbar from "smooth-scrollbar";

export default {
    components: {
        StarMenu,
        SubMenu,
        StarTitleBar,
        StarCards,
        StarPaginator,
        Footer
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
