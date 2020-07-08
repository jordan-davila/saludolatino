<template>
    <nav class="flex flex-col justify-between h-full w-16 border-r border-gray-700 border-solid overflow-hidden">
        <div class="flex flex-col flex-1 justify-center items-center">
            <div class="sections text-white text-sm w-full">
                <div class="section text-vertical w-full py-6 flex flex-col justify-center items-center border-l-2 border-solid border-indigo-600">
                    Destacados
                </div>
                <div class="section text-vertical w-full py-6 flex flex-col justify-center items-center">Nuevos</div>
                <div class="section text-vertical w-full py-6 flex flex-col justify-center items-center text-indigo-600">Eres una Estrella?</div>
            </div>
        </div>
        <div class="icons text-white text-sm h-16 w-full flex flex-col justify-center items-center">
            <i class="far fa-share-alt"></i>
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
