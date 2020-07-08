<template>
    <modal name="video_player" :classes="['video-modal', 'modal']" transition="pop-out" :delay="50000" @before-open="getVideo">
        <div class="flex h-full w-full justify-center items-center" v-if="video != null">
            <div class="video w-96 h-full bg-gray-600 relative overflow-hidden">
                <video-player class="video-player-box w-full h-full absolute top-0 left-0" :options="video.options" :playsinline="true"> </video-player>
            </div>
            <div class="info flex-1 h-full bg-gray-700 text-white relative text-sm flex flex-col justify-between">
                <div class="title px-12 py-8 flex justify-between bg-gray-800">
                    <div class="title">Video Personalizado</div>
                    <button class="close text-sm text-white" @click.prevent="$modal.hide('video_player')">
                        <i class="far fa-times"></i>
                    </button>
                </div>
                <div class="description py-8 px-12 flex-1">
                    <div class="misc flex justify-between items-center text-indigo-400 mb-4">
                        <div class="tags">#cumpleaños</div>
                        <div class="date">05 / 06 / 2020</div>
                    </div>
                    <div class="names">
                        <div class="name"><span class="font-bold text-gray-300">De: </span>{{ video.from.name }}</div>
                        <div class="name"><span class="font-bold text-gray-300">Para: </span>{{ video.to.name }}</div>
                    </div>
                </div>
                <div class="footer options flex justify-between items-center">
                    <button class="px-6 py-4 bg-indigo-600 text-sm text-white flex flex-1 justify-between items-center border-t border-solid border-indigo-600">
                        <span class="mr-4">Hacer Una Peticion Igual</span>
                        <i class="far fa-shopping-cart"></i>
                    </button>
                    <button class="p-4 bg-gray-600 text-sm text-white w-16 h-full">
                        <i class="far fa-share-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
    data() {
        return { video: null };
    },
    methods: {
        getVideo(event) {
            this.video = event.params.video;
        }
    }
};
</script>
