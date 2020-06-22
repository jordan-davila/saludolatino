<template>
    <nav class="flex flex-col justify-between w-72 h-full border-r border-gray-200 border-solid overflow-hidden">
        <div class="py-10 px-12 w-full">
            <div class="logo w-full h-6"></div>
        </div>
        <!-- StarsMenu -->
        <section class="flex flex-col flex-1 justify-between py-10 px-12">
            <div class="links flex flex-col flex-1 text-sm text-gray-900 items">
                <router-link to="/" class="mb-8 flex justify-between items-center hover:text-accent text-sm text-gray-900">
                    <i class="far fa-long-arrow-alt-left"></i>
                    <span>Volver</span>
                </router-link>
                <a
                    class="mb-8 flex justify-between items-center hover:text-accent text-gray-900"
                    :class="[$route.path == '/estrellas' ? 'text-accent' : null]"
                    @click.prevent="getStars('')"
                >
                    <span>Todos</span>
                    <i class="far fa-stars"></i>
                </a>
                <a
                    v-for="category in categories"
                    v-bind:key="category.id"
                    class="mb-8 flex justify-between items-center hover:text-accent text-gray-900 cursor-pointer"
                    :class="[$route.path.includes('estrellas/' + category.slug) ? 'text-accent' : null]"
                    @click.prevent="getStars(category.slug)"
                >
                    <span>{{ category.name }}</span>
                    <span class="text-xs">{{ category.user_count }}</span>
                </a>
            </div>
        </section>
    </nav>
</template>

<script>
import Scrollbar from "smooth-scrollbar";

export default {
    computed: {
        categories: {
            get() {
                return this.$store.state.Categories.categories;
            },
            set(value) {
                return this.$stote.commit("setCategories", value);
            }
        }
    },

    created() {
        this.$store.dispatch("fetchCategories");
    },

    methods: {
        getStars(category) {
            this.$store.dispatch("fetchStars", { ...(category ? { category: category } : {}) });
            this.$router.push(`/estrellas${[category ? "/" + category : null]}`);
            Scrollbar.get(document.querySelector("#smooth-scroll")).scrollTo(0, 0, 300);
        }
    }
};
</script>
