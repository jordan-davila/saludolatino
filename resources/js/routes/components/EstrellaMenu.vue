<template>
    <nav
        class="flex flex-col justify-between w-64 py-10 px-16 h-full border-r border-gray-100 border-solid"
    >
        <div class="top flex flex-col">
            <div class="logo mb-20"></div>
            <div class="flex flex-col text-sm text-gray-300">
                <router-link
                    to="/"
                    class="mb-8 flex justify-between items-center hover:text-gray-800"
                    :class="[$route.path == '/' ? 'text-gray-800' : '']"
                >
                    <span>Inicio</span>
                    <i class="far fa-th-large"></i>
                </router-link>
                <router-link
                    to="/estrellas"
                    class="mb-8 flex justify-between items-center hover:text-gray-800"
                    :class="[
                        $route.path.includes('estrellas') ? 'text-gray-800' : ''
                    ]"
                >
                    <span>Estrellas</span>
                    <i class="far fa-stars"></i>
                </router-link>
                <router-link
                    to="/contactos"
                    class="flex justify-between items-center hover:text-gray-800"
                    :class="[
                        $route.path.includes('contactos') ? 'text-gray-800' : ''
                    ]"
                >
                    <span>Contactos</span>
                    <i class="far fa-phone"></i>
                </router-link>
            </div>
        </div>
        <div class="bot flex flex-col">
            <div class="promo flex flex-col justify-center items-center">
                <div
                    class="icon rounded-lg bg-purple-100 inline-block text-accent w-16 h-16 mb-4 flex justify-center items-center text-2xl"
                >
                    <i class="far fa-suitcase"></i>
                </div>
                <div class="description text-gray-300 text-xs text-center mb-4">
                    Eres una super estrella?
                    <a href="#" class="underline">Abre tu cuenta hoy!</a>
                </div>
                <button
                    class="w-40 flex flex-row justify-center items-center p-3 rounded text-sm text-white bg-accent"
                >
                    <span>Cuenta Estrella</span>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>
