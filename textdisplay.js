<!DOCTYPE html>
<html>
<head>
    <title>Input Text Display</title>
</head>
<body>
    <h1>Text Display</h1>
    
    <label for="inputText">Enter Text:</label>
    <input type="text" id="inputText">
    <button id="displayButton">Display Text</button>
    
    <p>Entered Text: <span id="displayArea"></span></p>
    
    <script>
        // Get references to the input element and the display area
        var inputElement = document.getElementById("inputText");
        var displayArea = document.getElementById("displayArea");
        var displayButton = document.getElementById("displayButton");

        // Add an event listener to the button
        displayButton.addEventListener("click", function() {
            // Get the value from the input element and display it
            var enteredText = inputElement.value;
            displayArea.textContent = enteredText;
        });
    </script>
</body>
</html>
