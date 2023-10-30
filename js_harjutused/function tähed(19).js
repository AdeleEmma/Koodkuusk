function prindiTahtMuster(kordusteArv) {
    for (let i = 1; i <= kordusteArv; i++) {
        let rida = '';
        for (let j = 1; j <= i; j++) {
            rida += '*';
        }
        console.log(rida);
    }
}

// Näitekasutus:
const kordusteArv = 5; // Asenda see soovitud arvuga
prindiTahtMuster(kordusteArv);
