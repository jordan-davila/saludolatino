<template>
    <div class="title-bar flex flex-row justify-center my-12">
        <button
            :class="
                `flex flex-row justify-center items-center p-3 rounded text-sm text-white bg-accent ${[pagination.current_page == 1 ? 'bg-opacity-25' : null]}`
            "
            :disabled="pagination.current_page == 1"
            @click="goToPage(pagination.current_page - 1)"
        >
            <i class="far fa-long-arrow-alt-left"></i>
        </button>
        <div class="flex flex-row justify-center items-center p-3 rounded text-sm text-gray-800 bg-transparent border-gray-100 border-solid border mx-4">
            <span> {{ pagination.current_page }} / {{ pagination.last_page }} </span>
        </div>
        <button
            :class="
                `flex flex-row justify-center items-center p-3 rounded text-sm text-white bg-accent ${[
                    pagination.current_page == pagination.last_page ? 'bg-opacity-25' : null
                ]}`
            "
            :disabled="pagination.current_page == pagination.last_page"
            @click="goToPage(pagination.current_page + 1)"
        >
            <i class="far fa-long-arrow-alt-right"></i>
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
            const time = 500; //ms
            Scrollbar.get(document.querySelector("#smooth-scroll")).scrollTo(0, 0, time);
            setTimeout(() => {
                this.$store.dispatch("fetchStars", {
                    category: this.$route.params.category,
                    page: page
                });
            }, time);
        }
    }
};
</script>
