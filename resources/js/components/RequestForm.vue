<template>
    <div id="request-form-scroll" class="flex-1 h-full overflow-y-auto">
        <div class="form flex flex-1 flex-col w-full text-white text-sm p-16">
            <div class="mb-8 w-full">
                <h3 class="text-white mb-4">Este Video Es Para:</h3>
                <div class="options border border-solid border-gray-700 inline-flex w-auto">
                    <button
                        @click.prevent="request.myself = false"
                        :class="!request.myself ? 'active-option' : ''"
                        class="border-r border-solid border-gray-700 px-8 py-4 flex justify-center items-center hover:bg-indigo-600 hover:text-white focus:outline-none"
                    >
                        Otra Persona
                    </button>
                    <button
                        @click.prevent="request.myself = true"
                        :class="request.myself ? 'active-option' : ''"
                        class="px-8 py-4 flex justify-center items-center hover:bg-indigo-600 hover:text-white focus:outline-none"
                    >
                        Mi Persona
                    </button>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4" v-if="!request.myself">
                <div class="flex flex-col mb-8 w-full">
                    <label for="receptor" class="mb-4">Para Quien?</label>
                    <input
                        type="text"
                        name="receptor"
                        placeholder="Nombre / Grupo / Equipo"
                        class="bg-transparent w-full px-8 py-4 text-sm focus:outline-none placeholder-gray-700 border-solid border border-gray-700 focus:border-indigo-600"
                    />
                </div>
                <div class="flex flex-col mb-8 w-full">
                    <label for="receptor" class="mb-4">De Parte de Quien?</label>
                    <input
                        type="text"
                        name="receptor"
                        placeholder="Tu Nombre"
                        class="bg-transparent w-full px-8 py-4 text-sm focus:outline-none placeholder-gray-700 border-solid border border-gray-700 focus:border-indigo-600"
                    />
                </div>
            </div>
            <div class="flex flex-col mb-8 w-full" v-else>
                <label for="receptor" class="mb-4">Tu Nombre:</label>
                <input
                    type="text"
                    name="receptor"
                    placeholder="Nombre"
                    class="bg-transparent w-full px-8 py-4 text-sm focus:outline-none placeholder-gray-700 border-solid border border-gray-700 focus:border-indigo-600"
                />
            </div>
            <div class="flex flex-col mb-8 w-full">
                <label for="receptor" class="mb-4">Cual es la Ocasion?</label>
                <div class="dropdown relative">
                    <div class="icon absolute text-base top-0 right-0 mr-4 mt-3"><i class="far fa-sort-down"></i></div>
                    <select
                        type="text"
                        name="receptor"
                        placeholder="Nombre / Grupo / Equipo"
                        class="bg-transparent block appearance-none w-full px-8 py-4 text-sm focus:outline-none placeholder-gray-700 border-solid border border-gray-700 focus:border-indigo-600"
                    >
                        <option value="">Cumpleaños</option>
                        <option value="">Regalo</option>
                        <option value="">Aniversario</option>
                        <option value="">Boda</option>
                        <option value="">Día del Padre</option>
                        <option value="">Día de la Madre</option>
                        <option value="">Pregunta</option>
                        <option value="">Anuncio</option>
                        <option value="" selected>Otro</option>
                    </select>
                </div>
            </div>
            <div class="flex flex-col mb-8 w-full">
                <label for="receptor" class="mb-4">Instrucciones para {{ star.name }}:</label>
                <textarea
                    type="text"
                    name="receptor"
                    placeholder="¡Es el cumpleaños de mi novio Tom el viernes y a los dos nos encantan tus videos! ¡Por favor deséale un feliz cumpleaños de mi parte (Sammy)!"
                    class="bg-transparent w-full px-8 py-4 text-sm focus:outline-none placeholder-gray-700 border-solid border border-gray-700 focus:border-indigo-600"
                ></textarea>
            </div>
            <div class="flex flex-col mb-8 w-full">
                <label for="receptor" class="mb-4">Correo Electronico:</label>
                <input
                    type="text"
                    name="receptor"
                    placeholder="Correo donde te enviaremos el Saludo"
                    class="bg-transparent w-full px-8 py-4 text-sm focus:outline-none placeholder-gray-700 border-solid border border-gray-700 focus:border-indigo-600"
                />
            </div>
            <div class="flex flex-col mb-8 w-full">
                <label for="receptor" class="mb-4">Celular:</label>
                <input
                    type="text"
                    name="receptor"
                    placeholder="00 - 000 - 0000"
                    class="bg-transparent w-full px-8 py-4 text-sm focus:outline-none placeholder-gray-700 border-solid border border-gray-700 focus:border-indigo-600"
                />
            </div>
            <div class="mb-8 w-full">
                <h3 class="text-white mb-4">Metodos de Pago:</h3>
                <div class="options border border-solid border-gray-700 inline-flex w-auto">
                    <button
                        @click.prevent="payment.method = 'card'"
                        :class="payment.method == 'card' ? 'active-option' : ''"
                        class="border-r border-solid border-gray-700 px-8 py-4 flex justify-center items-center hover:bg-indigo-600 hover: focus:outline-none"
                    >
                        <i class="fab fa-cc-amex mr-2"></i>
                        <i class="fab fa-cc-mastercard mr-2"></i>
                        <i class="fab fa-cc-visa mr-2"></i>
                        <span>Tarjeta de Debito / Credito</span>
                    </button>
                    <button
                        @click.prevent="payment.method = 'paypal'"
                        :class="payment.method == 'paypal' ? 'active-option' : ''"
                        class="px-8 py-4 flex justify-center items-center hover:bg-indigo-600 hover: focus:outline-none"
                    >
                        <i class="fab fa-cc-paypal mr-2"></i>
                        <span>Paypal</span>
                    </button>
                </div>
            </div>
            <div class="flex flex-col mb-8 w-full" v-if="payment.method == 'card'">
                <label for="receptor" class="mb-4">Numero de la Tarjeta: </label>
                <input
                    type="text"
                    name="receptor"
                    placeholder="00 - 000 - 0000"
                    class="bg-transparent w-full px-8 py-4 text-sm focus:outline-none placeholder-gray-700 border-solid border border-gray-700 focus:border-indigo-600"
                />
            </div>
            <div class="grid grid-cols-2 gap-4" v-if="payment.method == 'card'">
                <div class="flex flex-col mb-8 w-full">
                    <label for="receptor" class="mb-4">Fecha de Expiracion: </label>
                    <input
                        type="text"
                        name="receptor"
                        placeholder="00 - 000 - 0000"
                        class="bg-transparent w-full px-8 py-4 text-sm focus:outline-none placeholder-gray-700 border-solid border border-gray-700 focus:border-indigo-600"
                    />
                </div>
                <div class="flex flex-col mb-8 w-full">
                    <label for="receptor" class="mb-4">
                        CVC:
                        <button @click.prevent="clicked == true" class="text-white text-xs">
                            <i class="far fa-info-circle"></i>
                        </button>
                    </label>
                    <input
                        type="text"
                        name="receptor"
                        placeholder="00 - 000 - 0000"
                        class="bg-transparent w-full px-8 py-4 text-sm focus:outline-none placeholder-gray-700 border-solid border border-gray-700 focus:border-indigo-600"
                    />
                </div>
            </div>
            <div class="flex flex-col mb-8 w-full" v-if="payment.method == 'paypal'">
                <h3 class="text-white">Para continuar su Peticion, presione el boton "Continuar Con Paypal"</h3>
            </div>
            <div class="flex justify-end w-full">
                <router-link
                    :to="`/estrella/${star.id}/videos`"
                    class="px-4 py-3 text-sm text-white flex justify-between items-center border border-solid border-gray-700 mr-4"
                >
                    <span class="mr-4">Cancelar</span>
                    <i class="far fa-times"></i>
                </router-link>
                <button class="px-4 py-3 bg-indigo-600 text-sm text-white flex justify-between items-center" v-if="payment.method == 'card'">
                    <span class="mr-4">Confirmar Peticion</span>
                    <i class="far fa-check"></i>
                </button>
                <button class="px-4 py-3 bg-indigo-600 text-sm text-white flex justify-between items-center" v-else>
                    <span class="mr-4">Continuar Con Paypal</span>
                    <i class="fab fa-cc-paypal"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Scrollbar from "smooth-scrollbar";

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
    },

    data() {
        return {
            request: {
                user_id: 1,
                myself: false, // For who? Another Person or Myself
                to: "",
                ocasion: "",
                instructions: "",
                email: "",
                phone: "",
                private: false
            },

            payment: {
                method: "card",
                card_number: "",
                exp_date: "",
                cvc: ""
            }
        };
    },

    mounted() {
        Scrollbar.init(document.querySelector("#request-form-scroll"), {
            damping: 0.1,
            renderByPixels: true,
            alwaysShowTracks: false,
            continuousScrolling: true
        });
    }
};
</script>
