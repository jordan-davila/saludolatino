<template>
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full" v-if="typeof star.videos != 'undefined'">
        <template v-for="video in star.videos">
            <a href="#" @click.prevent="$modal.show('video_player', { video: video })" class="flex flex-col" :key="video.id">
                <div
                    :style="`background-image: url('../../'); padding-bottom: 100%`"
                    class="card bg-cover bg-gray-800 bg-center h-20 text-white py-24 px-10 object-fill relative overflow-hidden mb-4"
                >
                    <div class="card-cover w-full h-full absolute top-0 left-0 flex justify-center items-center">
                        <div
                            class="h-4/5 w-4/5 border border-solid border-white hover:w-full hover:h-full hover:border-gray-900 transition-all duration-150 ease-in-out"
                        ></div>
                    </div>
                </div>
                <div class="info text-sm">
                    <div class="flex justify-between">
                        <span class="text-gray-500">#Cumpleaños</span>
                        <!-- <a href="#"><i class="far fa-share-alt text-indigo-600"></i></a> -->
                    </div>
                    <div class="name text-white font-semibold">{{ video.to.name }}</div>
                </div>
            </a>
        </template>
    </div>
</template>

<script>
export default {
    computed: {
        star: {
            get() {
                return this.$store.state.Users.star;
            },
            set(value) {
                return this.$stote.commit("setStar", value);
            }
        }
    }
};
</script>
