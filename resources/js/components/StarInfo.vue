<template>
    <div style="flex: 0 295px;" class="star-info flex flex-col h-full border-r border-gray-700 border-solid text-white">
        <div class="flex-1 overflow-hidden">
            <div
                :style="`background-image: url('../..${star.avatar}'); padding-bottom: 75%`"
                class="card bg-cover bg-center h-20 text-white py-24 px-10 object-fill relative overflow-hidden mb-4"
            >
                <div class="card-cover w-full h-full absolute top-0 left-0 flex justify-center items-center">
                    <div
                        class="h-4/5 w-4/5 border border-solid border-white hover:w-full hover:h-full hover:border-gray-900 transition-all duration-150 ease-in-out"
                    ></div>
                </div>
            </div>
            <div class="info text-sm flex flex-col mb-8 px-12 py-4" v-if="typeof star.categories != 'undefined'">
                <h3 class="text-gray-500">#{{ star.categories[0].name }}</h3>
                <h2 class="mb-4 font-bold">{{ star.name }}</h2>
                <div class="stars flex text-xs text-indigo-500 mb-4">
                    <i class="fas fa-star mr-2"></i>
                    <i class="fas fa-star mr-2"></i>
                    <i class="fas fa-star mr-2"></i>
                    <i class="fas fa-star mr-2"></i>
                    <i class="far fa-star mr-2"></i>
                </div>
                <p class="text-gray-500" v-html="truncate(star.description, 25)"></p>
            </div>
        </div>
        <router-link
            v-if="page == 'videos'"
            :to="`/estrella/${this.$route.params.star}/peticion`"
            class="w-full h-14 bg-indigo-600 text-sm flex justify-between items-center px-12 border-t border-solid border-gray-700 text-white hover:bg-indigo-500"
        >
            <span>Hacer Peticion</span>
            <span class="font-bold">{{ star.price }}</span>
        </router-link>
        <router-link
            v-if="page == 'request'"
            :to="`/estrella/${this.$route.params.star}/videos`"
            class="w-full h-14 bg-indigo-600 text-white text-sm flex justify-between items-center px-12 border-t border-solid border-gray-700 hover:bg-indigo-500 hover:text-white"
        >
            <span>Cancelar</span>
            <i class="far fa-times"></i>
        </router-link>
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
        },
        page: {
            get() {
                return this.$store.state.Site.page;
            },
            set(value) {
                return this.$stote.commit("setPage", value);
            }
        }
    },
    methods: {
        truncate(str, no_words) {
            let str_count = str.length;
            let trunc = str
                .split(" ")
                .splice(0, no_words)
                .join(" ");
            let trunc_count = trunc.length;
            return str_count > trunc_count ? trunc + " ... <span class='text-indigo-600'>more</span>" : trunc;
        }
    }
};
</script>
