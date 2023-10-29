function arvutaKeskmineHinne(hinded) {
  if (hinded.length === 0) {
    console.log("Hindeid ei ole antud.");
    return;
  }

  let hinneteSumma = 0;
  for (let i = 0; i < hinded.length; i++) {
    hinneteSumma += hinded[i];
  }
  
  const keskmineHinne = hinneteSumma / hinded.length;

  console.log(`Õpilase keskmine hinne on ${keskmineHinne.toFixed(2)}.`);
}

// Näide kasutamisest:
const hinded = [3, 5, 4, 3, 4, 5, 3, 4, 2];
arvutaKeskmineHinne(hinded);
