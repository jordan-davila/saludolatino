<template>
    <div class="content-container flex w-full h-full overflow-hidden relative">
        <div
            style="flex: 0 295px;"
            class="relative h-full overflow-hidden bg-indigo-600 bg-opacity-75 border-r border-solid border-gray-700 flex flex-col justify-center items-center"
        >
            <div class="content px-12 py-12 relative z-50 text-white text-sm flex flex-col h-full w-full justify-between items-center">
                <div class="info flex-1 flex flex-col justify-center">
                    <h1 class="font-bold mb-4">Ingresar A Tu Cuenta</h1>
                    <p>Utliza tu correo electronico y tu contrasena para iniciar session. Adicionalmente, tambien puedes ingresar con tu cuenta de Google.</p>
                </div>
                <router-link to="/inscribete" class="px-4 py-3 bg-gray-900 text-sm text-white flex h-12 justify-center items-center w-full">
                    <span class="mr-4">Eres una estrella?</span>
                    <i class="far fa-star"></i>
                </router-link>
            </div>
            <div class="blob large"></div>
            <div class="blob small"></div>
            <div class="blob"></div>
        </div>

        <div class="container h-full w-full flex flex-1 justify-center items-center">
            <div class="login-form flex-col w-96 text-sm text-white">
                <div class="flex flex-col mb-8 w-full">
                    <label for="email" class="mb-4">Correo Electronico</label>
                    <div class="relative w-full">
                        <div class="icon absolute top-0 left-0 h-full w-14 flex justify-center items-center border-solid border-r border-gray-700">
                            <i class="far fa-user"></i>
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo Electronico"
                            class="bg-transparent w-full pl-22 pr-8 py-4 text-sm focus:outline-none placeholder-gray-700 border-solid border border-gray-700 focus:border-indigo-600"
                        />
                    </div>
                </div>
                <div class="flex flex-col mb-8 w-full">
                    <label for="password" class="mb-4">Contraseña</label>
                    <div class="relative w-full">
                        <div class="icon absolute top-0 left-0 h-full w-14 flex justify-center items-center border-solid border-r border-gray-700">
                            <i class="far fa-key"></i>
                        </div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            class="bg-transparent w-full pl-22 pr-8 py-4 text-sm focus:outline-none placeholder-gray-700 border-solid border border-gray-700 focus:border-indigo-600"
                        />
                    </div>
                </div>
                <div class="flex justify-between items-center w-full mb-8">
                    <router-link to="/olvidaste-tu-contrasena">Olvidaste tu Contraseña?</router-link>
                    <button class="px-8 py-3 bg-indigo-600 text-sm text-white flex justify-between items-center">
                        <span class="mr-4">Ingresar</span>
                        <i class="fas fa-sign-in"></i>
                    </button>
                </div>
                <div class="divider flex justify-center items-center mb-8">
                    <div class="lines w-full border-t h-1 border-dashed border-gray-700"></div>
                    <div class="lines text-sm text-white px-4">ó</div>
                    <div class="lines w-full border-t h-1 border-dashed border-gray-700"></div>
                </div>
                <div class="flex justify-between items-center w-full mb-8">
                    <button class="bg-indigo-600 text-sm text-white flex w-full h-12">
                        <div class="icon w-12 h-full flex justify-center items-center bg-indigo-500"><i class="fab fa-google"></i></div>
                        <span class="px-8 py-3 w-full flex flex-1 h-full justify-center items-center">Ingresar Con Google</span>
                    </button>
                </div>
                <div class="flex justify-between items-center w-full">
                    <router-link to="/registrate">No tienes cuenta? Registrate aqui.</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
