function calculateFactorial(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    
    if (number === 0 || number === 1) {
        return 1; // Factorial of 0 and 1 is 1
    }

    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}

// Example usage:
const n = 5; // Replace with the number for which you want to calculate the factorial
const result = calculateFactorial(n);
console.log(`The factorial of ${n} is ${result}`);
