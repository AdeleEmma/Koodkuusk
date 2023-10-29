function rotateString(inputString) {
  // Split the input string into an array of characters
  const stringArray = inputString.split("");

  // Reverse the array of characters
  const reversedArray = stringArray.reverse();

  // Join the reversed array back into a string
  const rotatedString = reversedArray.join("");

  console.log(`Rotated String: ${rotatedString}`);
}

// Example usage:
rotateString("Hello, World!"); // This will print "Rotated String: !dlroW ,olleH"
rotateString("12345");        // This will print "Rotated String: 54321"
