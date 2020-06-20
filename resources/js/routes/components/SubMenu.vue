<template>
    <nav class="flex flex-rows justify-between items-center mb-8 pt-10 px-16">
        <div class="search-box w-64 relative">
            <div class="absolute h-10 left-0 top-0 flex items-center pl-4 text-sm text-gray-900">
                <i class="h-2 w-3 mt-2text-gray-900 far fa-search"></i>
            </div>
            <input
                class="w-full pl-10 pr-4 py-3 text-sm text-gray-300 border-gray-900 border border-solid rounded bg-transparent outline-none placeholder-gray-300 focus:shadow"
                type="text"
                placeholder="Buscar Estrella"
                v-model="search"
            />
        </div>
        <div class="notifications flex flex-rows items-center">
            <div class="icon mr-8 w-5 h-5 text-gray-900">
                <i class="far fa-bell"></i>
            </div>
            <div class="icon mr-8 w-5 h-5 text-gray-900">
                <i class="far fa-bookmark"></i>
            </div>

            <button
                class="w-40 mr-4 flex flex-row justify-center items-center p-3 rounded text-sm text-gray-900 bg-transparent border-gray-900 border-solid border"
            >
                <span>Ingresar</span>
            </button>
            <button class="w-40 flex flex-row justify-center items-center p-3 rounded text-sm text-white bg-gray-900">
                <span>Registrate</span>
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return { search: null };
    }
};
</script>
