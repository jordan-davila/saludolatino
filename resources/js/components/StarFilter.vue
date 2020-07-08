<template>
    <div style="flex: 0 295px;" class="stars-filter flex flex-col h-full border-r border-gray-700 border-solid text-white">
        <div class="filters flex-1 p-16 overflow-hidden">
            <h2 class="text-sm font-bold mb-8">Nuestras Estrellas</h2>
            <div class="option text-sm flex flex-col mb-8 text-gray-500">
                <h3 class="text-white mb-4">Ordenar Por:</h3>
                <a href="#" class="mb-4 text-indigo-600">Más Relevantes</a>
                <a href="#" class="mb-4">Menor Precio</a>
                <a href="#">Mayor Precio</a>
            </div>
            <div class="option text-sm flex flex-col text-gray-500">
                <h3 class="text-white mb-4">Categorias:</h3>
                <a href="#" :class="$route.params.category == null ? 'text-indigo-600' : ''" class="mb-4" @click.prevent="goToCategory()">Todos</a>
                <template v-for="category in categories">
                    <a :href="`/estrellas/${category.name}`" @click.prevent="goToCategory(category.name)" class="mb-4" :key="category.id">
                        {{ category.name }}
                        <span class="text-xs">( {{ category.user_count }} )</span>
                    </a>
                </template>
                <a href="#" class="mb-4 text-indigo-600">Ver Todas Las Categorias</a>
            </div>
        </div>
        <StarPaginator></StarPaginator>
    </div>
</template>

<script>
import StarPaginator from "./StarPaginator";
import Scrollbar from "smooth-scrollbar";

export default {
    components: { StarPaginator },
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
        this.$store.dispatch("fetchCategories", 5);
    },

    methods: {
        goToCategory(category) {
            this.$router.push({ params: { category: category } });
            this.$store.dispatch("fetchStars", { category: category });
            Scrollbar.get(document.querySelector("#star-smooth-scroll")).scrollTo(0, 0, 300);
        }
    }
};
</script>
