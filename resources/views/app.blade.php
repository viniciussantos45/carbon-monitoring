<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Carbon Monitoring</title>

        @if (app()->isLocal())
            @viteReactRefresh
        @endif

        @vite(['resources/css/app.css', 'resources/js/app.tsx'])

    </head>

    <body class="antialiased">
        <div id="root"></div>
    </body>

</html>
