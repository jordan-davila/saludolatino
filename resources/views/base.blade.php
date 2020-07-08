<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @hasSection('title') <title> @yield('title') - {{ config('app.name') }}</title>
    @else <title>{{ config('app.name') }}</title> @endif

    <!-- Fonts -->
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    <!-- Scripts & Tokens -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="{{ mix('js/app.js') }}" defer></script>

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
</head>

<body class="bg-gray-900">
    <main id="app">
        <section class="container max-w-none bg-gray-900 flex flex-col h-screen">
            <main-menu></main-menu>
            <section class="flex h-full w-full overflow-hidden">
                <sub-menu></sub-menu>
                <div class="content-container flex-1 w-full relative">
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                </div>
            </section>
        </section>
    </main>

    @env('local')
    <script src="http://localhost:35729/livereload.js"></script>
    @endenv
</body>

</html>