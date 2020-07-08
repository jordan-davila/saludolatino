<template>
    <div class="pagination h-16 border-t border-solid border-gray-700 flex items-center" v-if="pagination">
        <button
            @click="goToPage(pagination.current_page - 1)"
            :disabled="pagination.current_page == 1"
            :class="pagination.current_page != 1 ? 'active-option' : ''"
            class="w-16 h-full flex justify-center items-center border-solid border-r border-gray-700 text-sm"
        >
            <i class="far fa-chevron-left"></i>
        </button>
        <div class="flex flex-col flex-1 justify-center items-center text-sm">
            <h6 class="text-indigo-600">Página</h6>
            <span>{{ pagination.current_page }} de {{ pagination.last_page }}</span>
        </div>
        <button
            @click="goToPage(pagination.current_page + 1)"
            :disabled="pagination.current_page == pagination.last_page"
            :class="pagination.current_page != pagination.last_page ? 'active-option' : ''"
            class="w-16 h-full flex justify-center items-center border-solid border-l border-gray-700 text-sm"
        >
            <i class="far fa-chevron-right"></i>
        </button>
    </div>
</template>

<script>
import Scrollbar from "smooth-scrollbar";

export default {
    computed: {
        pagination: {
            get() {
                return this.$store.state.Users.pagination;
            },
            set(value) {
                return this.$stote.commit("setStars", value);
            }
        }
    },
    methods: {
        goToPage(page) {
            this.$router.push({ query: { pagina: page } });
            this.$store.dispatch("fetchStars", {
                category: this.$route.params.category,
                page: page
            });
            Scrollbar.get(document.querySelector("#star-smooth-scroll")).scrollTo(0, 0, 300);
        }
    }
};
</script>
