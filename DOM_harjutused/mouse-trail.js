<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .trail {
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #3498db;
            pointer-events: none; /* Ignore mouse events on trails */
        }
    </style>
    <title>Mouse Trail Effect</title>
</head>
<body>

<script>
    document.addEventListener("DOMContentLoaded", function () {
        const trailContainer = document.body;
        const trailClassName = 'trail';
        const trailLifetime = 800; // Milliseconds

        document.addEventListener("mousemove", function (event) {
            const trail = document.createElement('div');
            trail.className = trailClassName;

            const mouseX = event.pageX;
            const mouseY = event.pageY;

            trail.style.left = mouseX + 'px';
            trail.style.top = mouseY + 'px';

            trailContainer.appendChild(trail);

            setTimeout(function () {
                trail.remove();
            }, trailLifetime);
        });
    });
</script>

</body>
</html>
