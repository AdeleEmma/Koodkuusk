<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #clock {
            font-size: 24px;
            font-family: Arial, sans-serif;
            margin: 20px;
        }
    </style>
    <title>Real-Time Clock</title>
</head>
<body>

<div id="clock"></div>

<script>
    function updateClock() {
        const clockElement = document.getElementById('clock');
        const currentTime = new Date();
        
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        
        const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
        
        clockElement.textContent = formattedTime;
    }

    function padZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initial update
    updateClock();
</script>

</body>
</html>
