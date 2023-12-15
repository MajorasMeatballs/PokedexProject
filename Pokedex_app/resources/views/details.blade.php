<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokemon Details</title>
</head>
<body>
    <div id="app" data-page="{{ json_encode($page) }}">
        @inertia
    </div>

    <div data-pokemon-details="{{ $id }}"></div>

    <script src="{{ mix('/js/app.js') }}" defer></script>
</body>
</html>