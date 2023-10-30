function kasOnAlgarv(number) {
    if (number <= 1) {
        console.log(number + " ei ole algarv.");
        return;
    }

    if (number === 2) {
        console.log(number + " on algarv.");
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(number + " ei ole algarv.");
            return;
        }
    }

    console.log(number + " on algarv.");
}

// Näitekasutus:
const arv = 17; // Asenda see arvuga, mida soovid kontrollida
kasOnAlgarv(arv);
