function prindiKorrutustabel(number) {
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        console.log(`${number} * ${i} = ${result}`);
    }
}

// Näitekasutus:
const number = 5; // Asenda see soovitud numbriga
prindiKorrutustabel(number);
