<template>
    <div class="title-bar flex flex-row justify-between mb-8">
        <h1 class="text-4xl font-bold text-gray-800">Destacados</h1>
        <div class="filters flex flex-row">
            <div class="dropdown relative mr-4">
                <select
                    v-model="filter_date_selection"
                    class="appearance-none leading-tight focus:outline-none w-40 flex flex-row justify-center items-center p-3 rounded text-sm text-gray-800 bg-transparent border-gray-100 border-solid border"
                >
                    <option
                        v-for="date in filter_date"
                        :value="date"
                        :key="date"
                        >{{ date }}</option
                    >
                </select>
                <div
                    class="absolute h-10 right-0 top-0 flex items-center pr-4 text-gray-800"
                >
                    <i class="h-5 text-gray-900 far fa-sort-down"></i>
                </div>
            </div>
            <div class="dropdown relative">
                <select
                    v-model="filter_order_selection"
                    class="appearance-none leading-tight focus:outline-none w-56 flex flex-row justify-center items-center p-3 rounded text-sm text-gray-800 bg-transparent border-gray-100 border-solid border"
                >
                    <option
                        v-for="order in filter_order"
                        :value="order"
                        :key="order"
                        >{{ order }}</option
                    >
                </select>
                <div
                    class="absolute h-10 right-0 top-0 flex items-center pr-4 text-gray-800"
                >
                    <i class="h-5 text-gray-900 far fa-sort-down"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            filter_date_selection: "Esta Semana",
            filter_date: ["Esta Semana", "Este Mes", "Este Año"],
            filter_order_selection: "Ordenar Por: Relevancia",
            filter_order: [
                "Ordenar Por: Relevancia",
                "Ordenar Por: Precio Mayor",
                "Ordenar Por: Precio Menor"
            ]
        };
    }
};
</script>
