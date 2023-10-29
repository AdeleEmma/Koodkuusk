function kontrolliMarek(massiiv) {
  if (massiiv.includes("Marek")) {
    console.log("Marek on massiivis.");
  } else {
    console.log("Marek pole massiivis.");
  }
}

// Näide kasutamisest:
const nimed = ["Jaan", "Marek", "Liina", "Kati"];
kontrolliMarek(nimed);
