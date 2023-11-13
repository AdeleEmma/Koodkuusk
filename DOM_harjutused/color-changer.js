<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #color-div {
            width: 100px;
            height: 100px;
            margin: 20px;
            border: 2px solid #000;
        }

        #color-btn {
            cursor: pointer;
        }
    </style>
    <title>Color Changing Page</title>
</head>
<body>

<div id="color-div"></div>
<button id="color-btn" onclick="changeColor()">Change Color</button>

<script>
    const colorDiv = document.getElementById('color-div');
    const colorBtn = document.getElementById('color-btn');

    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeColor() {
        const randomColor = generateRandomColor();
        colorDiv.style.backgroundColor = randomColor;
    }
</script>

</body>
</html>
