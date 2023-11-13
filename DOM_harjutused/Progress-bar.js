<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #progress-bar {
            width: 300px;
            height: 30px;
            border: 1px solid #ccc;
            position: relative;
            margin-top: 20px;
        }

        #progress-fill {
            height: 100%;
            background-color: #4CAF50;
            width: 0;
            transition: width 0.3s ease;
            position: absolute;
        }

        #progress-text {
            line-height: 30px;
            color: white;
            text-align: center;
            width: 100%;
            position: absolute;
        }

        #btn-load {
            margin-top: 10px;
            cursor: pointer;
        }
    </style>
    <title>Progress Bar Example</title>
</head>
<body>

<div id="progress-bar">
    <div id="progress-fill"></div>
    <div id="progress-text">0%</div>
</div>
<button id="btn-load" onclick="increaseProgressBar()">Load Progress</button>

<script>
    const progressBar = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const loadButton = document.getElementById('btn-load');

    const progressIncrement = 10; // Choose the increment value

    let currentProgress = 0;

    function increaseProgressBar() {
        currentProgress += progressIncrement;

        if (currentProgress <= 100) {
            progressBar.style.width = currentProgress + '%';
            progressText.textContent = currentProgress + '%';
        } else {
            // Reset progress if it exceeds 100%
            currentProgress = 0;
            progressBar.style.width = '0%';
            progressText.textContent = '0%';
        }
    }
</script>

</body>
</html>
