<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>My App</title>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx'])

    </head>

    <body class="antialiased">
        <div id="root"></div>
    </body>

</html>
