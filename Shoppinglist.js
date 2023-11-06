<!DOCTYPE html>
<html>
<head>
    <title>Shopping List</title>
    <style>
        /* Add some basic styling for the page */
        body {
            font-family: Arial, sans-serif;
        }
        #shopping-list {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            max-width: 400px;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <h1>Shopping List</h1>
    <div id="shopping-list">
        <input type="text" id="item" placeholder="Enter food item">
        <button id="add-button">Add</button>
        <ul id="item-list"></ul>
    </div>

    <script>
        // Get references to HTML elements
        var itemInput = document.getElementById("item");
        var addButton = document.getElementById("add-button");
        var itemList = document.getElementById("item-list");

        // Function to add an item to the list
        function addItem() {
            var itemText = itemInput.value.trim();

            if (itemText !== "") {
                // Create a new list item and add it to the shopping list
                var listItem = document.createElement("li");
                listItem.innerHTML = `
                    ${itemText}
                    <button onclick="removeItem(this)">Remove</button>
                `;

                itemList.appendChild(listItem);

                // Clear the input field
                itemInput.value = "";
            }
        }

        // Function to remove an item from the list
        function removeItem(button) {
            var listItem = button.parentElement;
            itemList.removeChild(listItem);
        }

        // Add event listeners
        addButton.addEventListener("click", addItem);
        itemInput.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                addItem();
            }
        });
    </script>
</body>
</html>
