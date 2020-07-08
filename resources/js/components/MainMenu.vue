<template>
    <nav class="flex justify-between w-full h-16 border-b border-gray-700 border-solid z-50">
        <div class="w-16 h-full border-solid border-gray-700 border-r text-white text-base flex justify-center items-center">
            <i class="far fa-th"></i>
        </div>
        <router-link to="/" class="flex justify-center items-center border-solid border-gray-700 border-r text-white font-normal h-full px-24">
            <div class="logo text-lg">saludo<span class="text-indigo-600">latino</span></div>
        </router-link>
        <SearchBar></SearchBar>
        <div class="menu flex text-sm cursor-pointer">
            <router-link to="/" class="text-white text-sm justify-center items-center px-6 flex capitalize">Inicio</router-link>
            <router-link to="/estrellas" class="text-white text-sm justify-center items-center px-6 flex capitalize">Estrellas</router-link>
            <router-link
                to="/favoritos"
                class="text-white text-sm justify-center items-center px-6 flex capitalize"
                style="box-shadow: 1px 0 0 rgba(55, 65, 81, 1)"
            >
                Favoritos
            </router-link>
            <router-link
                to="/ingresar"
                class="text-white text-sm justify-center items-center px-6 flex capitalize"
                style="box-shadow: 1px 0 0 rgba(55, 65, 81, 1)"
            >
                Ingresar
            </router-link>
            <router-link to="/registrate" class="text-indigo-600 text-sm font-semibold justify-center items-center px-6 flex capitalize">
                Registrate
            </router-link>
        </div>
    </nav>
</template>

<script>
import SearchBar from "./SearchBar";

export default {
    components: { SearchBar }
};
</script>
