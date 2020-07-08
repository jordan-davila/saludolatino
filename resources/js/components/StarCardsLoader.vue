<template>
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
        <template v-for="card in limit">
            <div class="flex flex-col hintloading" :key="card">
                <div
                    style="padding-bottom: 100%"
                    class="card bg-gray-800 bg-cover bg-center h-20 text-white py-24 px-10 object-fill shadow-2xl relative overflow-hidden mb-4"
                >
                    <div class="card-cover w-full h-full absolute top-0 left-0 flex justify-center items-center">
                        <div
                            class="h-4/5 w-4/5 border border-solid border-white hover:w-full hover:h-full hover:border-gray-900 transition-all duration-150 ease-in-out"
                        ></div>
                    </div>
                </div>
                <div class="info text-sm">
                    <div class="flex justify-between mb-4">
                        <span class="w-24 bg-gray-800 h-4"></span>
                        <span class="bg-indigo-700 w-12 h-4"></span>
                    </div>
                    <div class="bg-gray-800 w-48 h-5"></div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        limit: Number
    }
};
</script>
