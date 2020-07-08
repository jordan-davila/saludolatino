<template>
    <div class="flex justify-between mb-10">
        <div class="relative">
            <Dots :rows="4" :cols="7" bgColor="bg-gray-700" accentColor="bg-indigo-600" class="absolute"></Dots>
            <div class="title relative z-10 text-4xl text-white font-bold mt-4 ml-6">
                <h1>Consigue Videos<br />Personalizados De Tus</h1>
                <div class="text-indigo-600 relative h-14 w-full overflow-hidden">
                    <div class="word">Artistas Favoritos</div>
                    <div class="word">Cantantes Favoritos</div>
                    <div class="word">Deportistas Favoritos</div>
                    <div class="word">Youtubers Favoritos</div>
                </div>
            </div>
        </div>
        <div class="relative flex justify-center items-center">
            <Dots :rows="8" :cols="5" bgColor="bg-gray-700" accentColor="bg-indigo-600" class="absolute right-0"></Dots>
            <router-link to="#" class="px-4 py-3 bg-indigo-600 text-sm text-white flex justify-between items-center relative z-10 mr-12">
                <span class="mr-4">Como funciona ?</span>
                <i class="far fa-play"></i>
            </router-link>
        </div>
    </div>
</template>
<script>
import Dots from "./Dots";

export default {
    components: { Dots },
    data() {
        return {
            filter_date_selection: "Esta Semana",
            filter_date: ["Esta Semana", "Este Mes", "Este Año"]
        };
    }
};
</script>
