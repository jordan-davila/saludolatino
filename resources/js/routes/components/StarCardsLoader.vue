<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
        <div
            :key="n"
            v-for="n in 15"
            style="padding-bottom: 100%"
            class="card bg-white bg-opacity-25 h-20 text-white py-24 px-10 object-fill rounded shadow-2xl relative overflow-hidden"
        >
            <div class="block w-full h-full hover:bg-opacity-0 absolute top-0 left-0 flex flex-col justify-between items-end">
                <div class="hintloading price p-2 w-12 h-8 text-sm text-white bg-black bg-opacity-25 rounded font-bold m-4"></div>
                <div class="info-container flex flex-rows p-6 justify-between w-full">
                    <div class="info">
                        <div class="hintloading w-16 h-4 bg-black bg-opacity-25 rounded mb-4"></div>
                        <div class="hintloading w-32 h-6 bg-black bg-opacity-25 rounded"></div>
                    </div>
                    <button
                        class="hintloading icon w-12 h-12 flex justify-center items-center p-3 rounded-full text-sm text-white bg-black bg-opacity-25 outline-none focus:outline-none"
                    ></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
