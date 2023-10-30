function leiaSuurimArv(massiiv) {
    if (massiiv.length === 0) {
        return null; // Tagastab null tühja massiivi korral
    }

    let suurim = massiiv[0]; // Algne suurim arv on esimene element

    for (let i = 0; i < massiiv.length; i++) {
        if (massiiv[i] > suurim) {
            suurim = massiiv[i];
        }
    }

    return suurim;
}

// Kasutamine:
const minuArvud = [10, 5, 20, 15, 25, 30];
const suurimArv = leiaSuurimArv(minuArvud);
console.log("Suurim arv on: " + suurimArv);
