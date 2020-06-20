<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
        <template v-for="star in stars">
            <div
                :style="
                    `background-image: url('..${star.avatar}');
                    padding-bottom: 100%`
                "
                class="card bg-cover bg-center h-20 text-white py-24 px-10 object-fill rounded shadow-2xl relative overflow-hidden"
                :key="star.id"
            >
                <video-player
                    class="video-player-box w-full h-full absolute top-0 left-0"
                    :ref="`video${star.id}`"
                    :options="star.video.options"
                    @ended="stop(star.id)"
                    :playsinline="true"
                >
                </video-player>
                <div class="block card-cover w-full h-full hover:bg-opacity-0 absolute top-0 left-0 flex flex-col justify-between items-end">
                    <div class="price p-2 text-sm text-white bg-gray-900 bg-opacity-25 rounded font-bold m-4">
                        {{ star.price }}
                    </div>
                    <div class="info-container flex flex-rows p-6 justify-between w-full">
                        <div class="info">
                            <span class="text-accent text-sm font-bold">
                                <span class="mr-2" v-for="category in star.categories" :key="category.id">
                                    <template v-if="category.id != 1">
                                        {{ category.name }}
                                    </template>
                                </span>
                            </span>
                            <div class="name text-base">
                                {{ star.name }}
                            </div>
                        </div>
                        <button
                            class="icon w-12 h-12 flex justify-center items-center p-3 rounded-full text-sm text-white bg-gray-900 outline-none focus:outline-none"
                            @click.prevent="play(star.id)"
                            v-if="star.video.isPlaying == false"
                        >
                            <i class="far fa-play"></i>
                        </button>
                        <button
                            class="icon w-12 h-12 flex justify-center items-center p-3 rounded-full text-sm text-white bg-gray-900 outline-none focus:outline-none"
                            @click.prevent="pause(star.id)"
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
    props: ["initialCategory"],
    computed: {
        stars: {
            get() {
                return this.$store.state.Users.stars;
            },
            set(value) {
                return this.$stote.commit("setStars", value);
            }
        }
    },

    created() {
        this.getStars();
    },

    methods: {
        getStars() {
            const category = this.initialCategory ? this.initialCategory : this.$route.params.category;
            this.$store.dispatch("fetchStars", { ...(category ? { category: category } : {}) });
        },
        play(id) {
            this.stopAll();
            this.$refs["video" + id][0].player.play();
            _.find(this.stars, ["id", id]).video.isPlaying = true;
        },
        pause(id) {
            this.$refs["video" + id][0].player.pause();
            _.find(this.stars, ["id", id]).video.isPlaying = false;
        },
        stop(id) {
            this.pause(id);
            this.$refs["video" + id][0].player.currentTime(0);
            this.$refs["video" + id][0].player.hasStarted(false);
        },
        stopAll() {
            _.forEach(this.stars, star => {
                if (!star.video.isPlaying) return;
                star.video.isPlaying = false;
                this.stop(star.id);
            });
        }
    }
};
</script>
