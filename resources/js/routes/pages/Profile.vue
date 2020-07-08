<template>
    <div class="content-container flex w-full h-full overflow-hidden relative">
        <VideoPlayer></VideoPlayer>
        <StarInfo></StarInfo>
        <div class="flex flex-1 relative">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import StarInfo from "../../components/StarInfo";
import VideoPlayer from "../../modals/VideoPlayer";

export default {
    components: { StarInfo, VideoPlayer },
    created() {
        this.$store.dispatch("fetchStar", this.$route.params.star);
    },
    watch: {
        "$route.params.star": function() {
            this.$store.dispatch("fetchStar", this.$route.params.star);
        }
    }
};
</script>
