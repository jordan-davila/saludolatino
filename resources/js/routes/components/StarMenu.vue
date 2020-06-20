<template>
    <nav class="flex flex-col justify-between w-72 h-full border-r border-gray-200 border-solid overflow-hidden">
        <div class="links flex flex-col flex-1 h-full py-10 px-12">
            <div class="logo w-full h-6 mb-16"></div>
            <router-link to="/" class="mb-8 flex justify-between items-center hover:text-accent text-sm text-gray-900">
                <i class="far fa-long-arrow-alt-left"></i>
                <span>Volver</span>
            </router-link>
            <div class="categories no-scrollbar flex flex-col flex-1 overflow-y-auto text-sm text-gray-300">
                <a
                    class="mb-8 flex justify-between items-center hover:text-accent"
                    :class="
                        `mb-8 flex justify-between items-center hover:text-accent cursor-pointer
                        ${[$route.path == '/estrellas' ? 'text-accent' : null]}`
                    "
                    @click.prevent="getStars('')"
                >
                    <span class="text-gray-900">Todos</span>
                    <i class="far fa-stars"></i>
                </a>
                <a
                    v-for="category in categories"
                    v-bind:key="category.id"
                    :class="
                        `mb-8 flex justify-between items-center hover:text-accent cursor-pointer
                        ${[$route.path.includes('estrellas/' + category.slug) ? 'text-accent' : null]}`
                    "
                    @click.prevent="getStars(category.slug)"
                >
                    <span class="text-gray-900">{{ category.name }}</span>
                    <span>{{ category.user_count }}</span>
                </a>
            </div>
        </div>
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
