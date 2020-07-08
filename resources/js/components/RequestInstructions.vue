<template>
    <div class="h-full w-80 border-r border-solid border-gray-700 px-12 py-16">
        <h2 class="text-sm font-bold text-white mb-8">Como Funciona Las Peticiones?</h2>
        <div class="step flex justify-start text-sm text-white mb-8">
            <div class="icon text-base text-indigo-600 mr-4"><i class="far fa-calendar-alt"></i></div>
            <div class="instructions">
                <span class="text-indigo-600 font-bold">{{ star.name }}</span> tiene 7 días para completar su solicitud.
            </div>
        </div>
        <div class="step flex justify-start text-sm text-white mb-8">
            <div class="icon text-base text-indigo-600 mr-4"><i class="far fa-receipt"></i></div>
            <div class="instructions">
                Su recibo y las actualizaciones de su pedido se enviarán al correo electrónico proporcionado en Información de entrega.
            </div>
        </div>
        <div class="step flex justify-start text-sm text-white mb-8">
            <div class="icon text-base text-indigo-600 mr-4"><i class="far fa-envelope"></i></div>
            <div class="instructions">
                Cuando se complete su solicitud, le enviaremos un correo electrónico y un mensaje de texto con un enlace para ver, compartir o descargar su
                Saludo.
            </div>
        </div>
        <div class="step flex justify-start text-sm text-white">
            <div class="icon text-base text-indigo-600 mr-4"><i class="far fa-credit-card"></i></div>
            <div class="instructions">
                Si por alguna razón su video no se pudo completar, la retención de <span class="text-indigo-600 font-bold">{{ star.price }}</span> en su tarjeta
                se eliminará dentro de 5-7 días hábiles.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        star: {
            get() {
                return this.$store.state.Users.star;
            },
            set(value) {
                return this.$stote.commit("setStar", value);
            }
        }
    }
};
</script>
