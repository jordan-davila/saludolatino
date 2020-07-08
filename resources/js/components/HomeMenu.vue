<template>
    <nav class="flex flex-col justify-between w-72 h-full border-r border-gray-200 border-solid overflow-hidden">
        <div class="py-10 px-12 w-full">
            <div class="logo w-full h-6"></div>
        </div>
        <!-- HomeMenu -->
        <section class="flex flex-col flex-1 justify-between py-10 px-12">
            <div class="links flex flex-col flex-1 text-sm text-gray-900 items">
                <router-link to="/" class="mb-8 flex justify-between items-center hover:text-accent" :class="[$route.path == '/' ? 'text-accent' : '']">
                    <span>Inicio</span>
                    <i class="far fa-th-large"></i>
                </router-link>
                <router-link
                    to="/estrellas"
                    class="mb-8 flex justify-between items-center hover:text-accent"
                    :class="[$route.path.includes('estrellas') ? 'text-accent' : '']"
                >
                    <span>Estrellas</span>
                    <i class="far fa-stars"></i>
                </router-link>
                <router-link
                    to="/contactos"
                    class="flex justify-between items-center hover:text-accent"
                    :class="[$route.path.includes('contactos') ? 'text-accent' : '']"
                >
                    <span>Contactos</span>
                    <i class="far fa-phone"></i>
                </router-link>
            </div>
            <div class="promo flex flex-col justify-center items-center">
                <div class="icon rounded bg-gray-300 inline-block text-gray-900 w-16 h-16 mb-4 flex justify-center items-center text-2xl">
                    <i class="far fa-suitcase"></i>
                </div>
                <div class="description text-gray-300 text-xs text-center mb-4">
                    Eres una super estrella?
                    <a href="#" class="underline">Abre tu cuenta hoy!</a>
                </div>
                <button class="w-40 flex flex-row justify-center items-center p-3 rounded text-sm text-white bg-gray-900">
                    <span>Cuenta Estrella</span>
                </button>
            </div>
        </section>
    </nav>
</template>

<script>
export default {};
</script>
