<template>
    <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full"
    >
        <template v-for="estrella in estrellas">
            <div
                :style="
                    `background-image: url('..${estrella.avatar}');
                    padding-bottom: 100%`
                "
                class="card bg-cover bg-center h-20 text-white py-24 px-10 object-fill rounded shadow-2xl relative overflow-hidden"
                :key="estrella.id"
            >
                <video-player
                    class="video-player-box w-full h-full absolute top-0 left-0"
                    :ref="`video${estrella.id}`"
                    :options="estrella.video.options"
                    @ended="stop(estrella.id)"
                    :playsinline="true"
                >
                </video-player>
                <div
                    class="block cover w-full h-full bg-gray-800 bg-opacity-25 hover:bg-opacity-0 absolute top-0 left-0 flex items-end"
                >
                    <div
                        class="info-container flex flex-rows p-6 justify-between w-full"
                    >
                        <div class="info">
                            <span class="text-accent text-sm font-bold">
                                <span
                                    class="mr-2"
                                    v-for="category in estrella.categories"
                                    :key="category.id"
                                >
                                    <template v-if="category.id != 1">
                                        {{ category.name }}
                                    </template>
                                </span>
                            </span>
                            <div class="name text-base">
                                {{ estrella.name }}
                            </div>
                        </div>
                        <button
                            class="icon w-12 h-12 flex justify-center items-center p-3 rounded-full text-sm text-white bg-accent outline-none focus:outline-none"
                            @click.prevent="play(estrella.id)"
                            v-if="estrella.video.isPlaying == false"
                        >
                            <i class="far fa-play"></i>
                        </button>
                        <button
                            class="icon w-12 h-12 flex justify-center items-center p-3 rounded-full text-sm text-white bg-accent outline-none focus:outline-none"
                            @click.prevent="pause(estrella.id)"
                            v-else
                        >
                            <i class="far fa-pause"></i>
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    computed: {
        estrellas: {
            get() {
                return this.$store.state.Users.estrellas;
            },
            set(value) {
                return this.$stote.commit("setEstrellas", value);
            }
        }
    },

    created() {
        this.$store.dispatch("fetchEstrellas");
    },

    methods: {
        play(id) {
            this.stopAll();
            this.$refs["video" + id][0].player.play();
            _.find(this.estrellas, ["id", id]).video.isPlaying = true;
        },
        pause(id) {
            this.$refs["video" + id][0].player.pause();
            _.find(this.estrellas, ["id", id]).video.isPlaying = false;
        },
        stop(id) {
            this.$refs["video" + id][0].player.pause();
            this.$refs["video" + id][0].player.currentTime(0);
            this.$refs["video" + id][0].player.hasStarted(false);
        },
        stopAll() {
            _.forEach(this.estrellas, estrella => {
                if (!estrella.video.isPlaying) return;
                estrella.video.isPlaying = false;
                this.stop(estrella.id);
            });
        }
    }
};
</script>
