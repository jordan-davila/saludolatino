<template>
    <div class="flex flex-col">
        <template v-for="row in rows">
            <div :class="`grid grid-cols-${cols} gap-5 mb-5`" :key="row">
                <template v-for="col in cols">
                    <div
                        :class="'dots h-2 w-2 rounded-full col-span-1 bg-opacity-50 ' + (Math.floor(Math.random() * 5) === 1 ? accentColor : bgColor)"
                        :key="col"
                    ></div>
                </template>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        rows: Number,
        cols: Number,
        bgColor: String,
        accentColor: String
    }
};
</script>
