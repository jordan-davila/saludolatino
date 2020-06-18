<template>
    <section class="container max-w-none bg-body flex h-screen">
        <MainMenu></MainMenu>
        <section class="flex flex-col h-full w-full overflow-hidden">
            <SubMenu></SubMenu>
            <div class="flex flex-col overflow-y-auto pb-10 px-16">
                <TitleBar></TitleBar>
                <GridCards></GridCards>
            </div>
        </section>
    </section>
</template>

<script>
import MainMenu from "../components/MainMenu";
import SubMenu from "../components/SubMenu";
import TitleBar from "../components/TitleBar";
import GridCards from "../components/GridCards";

export default {
    components: { MainMenu, SubMenu, TitleBar, GridCards }
};
</script>
