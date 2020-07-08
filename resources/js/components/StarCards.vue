<template>
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
        <template v-for="star in stars">
            <router-link :to="`/estrella/${star.id}/videos`" class="flex flex-col" :key="star.id">
                <div
                    :style="`background-image: url('..${star.avatar}'); padding-bottom: 100%`"
                    class="card bg-cover bg-center h-20 text-white py-24 px-10 object-fill relative overflow-hidden mb-4"
                >
                    <div class="card-cover w-full h-full absolute top-0 left-0 flex justify-center items-center">
                        <div
                            class="h-4/5 w-4/5 border border-solid border-white hover:w-full hover:h-full hover:border-gray-900 transition-all duration-150 ease-in-out"
                        ></div>
                    </div>
                </div>
                <div class="info text-sm">
                    <div class="flex justify-between">
                        <span class="text-gray-500">#{{ star.categories[0].name }}</span>
                        <span class="text-indigo-600">{{ star.price }}</span>
                    </div>
                    <div class="name text-white font-semibold">{{ star.name }}</div>
                </div>
            </router-link>
        </template>
    </div>
</template>

<script>
export default {
    props: ["initialCategory", "limit"],
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
            const page = this.$route.query.pagina ? this.$route.query.pagina : 1;
            const limit = this.limit ? this.limit : null;
            this.$store.dispatch("fetchStars", {
                ...(category ? { category: category } : {}),
                ...(limit ? { limit: limit } : {}),
                ...(page ? { page: page } : {})
            });
        }
    }
};
</script>
