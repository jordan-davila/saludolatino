<template>
    <div class="title-bar flex flex-row justify-between mb-8">
        <h1 class="text-4xl font-bold text-gray-900">Estrellas Destacadas</h1>
        <div class="filters flex flex-row">
            <div class="flex flex-col justify-center relative mr-4">
                <select
                    v-model="filter_date_selection"
                    class="appearance-none leading-tight focus:outline-none w-32 flex flex-row justify-center items-center rounded text-sm text-gray-900 bg-transparent"
                >
                    <option v-for="date in filter_date" :value="date" :key="date">{{ date }}</option>
                </select>
                <div class="absolute right-0 flex items-center pr-4 text-gray-900">
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
            filter_date: ["Esta Semana", "Este Mes", "Este Año"]
        };
    }
};
</script>
