<template>
    <div class="bg-indigo-600 bg-opacity-75 w-full p-12 flex justify-between relative overflow-hidden">
        <div class="relative z-10">
            <Dots :rows="4" :cols="7" bgColor="bg-indigo-500" accentColor="bg-indigo-200" class="absolute"></Dots>
            <h1 class="relative z-10 text-4xl text-white font-black mt-4 ml-6">
                Eres una Super Estrella ?
            </h1>
            <h1 class="relative z-10 text-4xl text-gray-900 font-black ml-6 mb-4">
                Unete A Saludo Latino Hoy !
            </h1>
            <p class="ml-6 text-base text-white">
                Si tienes fanáticos y quieres unirte a saludolatino como una estrella,<br />puedes inscribirte aquí y nos pondremos en contacto pronto.
            </p>
        </div>
        <div class="relative flex justify-center items-center z-10">
            <Dots :rows="8" :cols="5" bgColor="bg-indigo-500" accentColor="bg-indigo-200" class="absolute right-0"></Dots>
            <router-link to="/inscribete" class="px-4 py-3 bg-gray-900 text-sm text-white flex justify-between items-center relative z-10 mr-12">
                <span class="mr-4">Inscribete Hoy !</span>
                <i class="far fa-sign-in-alt"></i>
            </router-link>
        </div>
        <div class="blob large"></div>
        <div class="blob small"></div>
        <div class="blob"></div>
    </div>
</template>

<script>
import Dots from "./Dots";
export default {
    components: { Dots }
};
</script>
