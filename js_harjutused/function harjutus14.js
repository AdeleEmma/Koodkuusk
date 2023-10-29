let inimesed = [
    {
        nimi: 'Alice',
        vanus: 28,
        aadress: 'Pargi 7',
        telefon: '23857493',
        email: 'alice@eesti.ee'
    },
    {
        nimi: 'Bob',
        vanus: 32,
        aadress: 'Tänavaküla 12',
        telefon: '293463847',
        email: 'bob@gmail.com'
    },
    {
        nimi: 'Marek',
        vanus: 22,
        aadress: 'Metsatee 3',
        telefon: '8594032',
        email: 'marek@example.com'
    }
];

function leiaAndmed(inimesed) {
    // Kõige vanema inimese nimi
    const koigeVanem = inimesed.reduce((prev, current) => (prev.vanus > current.vanus) ? prev : current);
    const kõigeVanemaNimi = koigeVanem.nimi;

    // Inimese nimi, kellel on kõige pikem aadress
    const kõigePikemaAadressiga = inimesed.reduce((prev, current) => (prev.aadress.length > current.aadress.length) ? prev : current);
    const kõigePikemaAadressigaNimi = kõigePikemaAadressiga.nimi;

    // Inimese nimi, kellel on kõige lühem telefoninumber
    const kõigeLühemaTelefoniga = inimesed.reduce((prev, current) => (prev.telefon.length < current.telefon.length) ? prev : current);
    const kõigeLühemaTelefonigaNimi = kõigeLühemaTelefoniga.nimi;

    // Inimese nimi, kelle e-posti aadressis sisaldub "eesti"
    const eestiKeeles = inimesed.find(person => person.email.includes("eesti"));
    const eestiKeelesNimi = eestiKeeles ? eestiKeeles.nimi : "Eestikeelset e-posti pole leitud";

    // Prindi leitud andmed konsooli
    console.log("Kõige vanema inimese nimi: " + kõigeVanemaNimi);
    console.log("Inimese nimi, kellel on kõige pikem aadress: " + kõigePikemaAadressigaNimi);
    console.log("Inimese nimi, kellel on kõige lühem telefoninumber: " + kõigeLühemaTelefonigaNimi);
    console.log("Inimese nimi, kelle e-posti aadressis sisaldub 'eesti': " + eestiKeelesNimi);
}

leiaAndmed(inimesed);
