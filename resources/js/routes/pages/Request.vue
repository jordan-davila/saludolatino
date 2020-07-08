<template>
    <div class="flex flex-1 w-full">
        <RequestInstructions></RequestInstructions>
        <RequestForm></RequestForm>
    </div>
</template>

<script>
import RequestInstructions from "../../components/RequestInstructions";
import RequestForm from "../../components/RequestForm";

export default {
    components: { RequestInstructions, RequestForm }
};
</script>
