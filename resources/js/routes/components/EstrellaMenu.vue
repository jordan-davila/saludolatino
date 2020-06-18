<template>
    <nav
        class="flex flex-col justify-between w-64 py-10 px-16 h-full border-r border-gray-100 border-solid"
    >
        <div class="top flex flex-col">
            <div class="logo mb-20"></div>
            <router-link
                to="/"
                class="mb-8 flex justify-between items-center hover:text-gray-800 text-sm text-gray-300"
                :class="[$route.path == '/' ? 'text-gray-800' : '']"
            >
                <i class="far fa-long-arrow-alt-left"></i>
                <span>Volver</span>
            </router-link>
        </div>
        <div
            class="bot flex flex-col flex-1 overflow-y-auto text-sm text-gray-300"
        >
            <router-link
                to="/estrellas/todos"
                class="mb-8 flex justify-between items-center hover:text-gray-800"
                :class="[
                    $route.path.includes('contactos') ? 'text-gray-800' : ''
                ]"
            >
                <span>Todos</span>
                <i class="far fa-stars"></i>
            </router-link>
            <router-link
                :to="`/estrellas/${category.name.toLowerCase()}`"
                v-for="category in categories"
                :key="category.id"
                class="mb-8 flex justify-between items-center hover:text-gray-800"
                :class="[
                    $route.path.includes('estrellas/' + category.name)
                        ? 'text-gray-800'
                        : ''
                ]"
            >
                <span>{{ category.name }}</span>
                <span>{{ category.user_count }}</span>
            </router-link>
        </div>
    </nav>
</template>

<script>
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
    }
};
</script>
