function arvutaPüramiidiRuumala(alusePindala, kõrgus) {
  const ruumala = (1/3) * alusePindala * kõrgus;
  console.log(`Püramiidi ruumala aluse pindalaga ${alusePindala} ruutühikutes ja kõrgusega ${kõrgus} ühikutes on ${ruumala} kuupühikutes.`);
}

// Näide kasutamisest:
const alusePindala = 50; // Asenda tegeliku aluse pindalaga
const kõrgus = 10;      // Asenda tegeliku kõrgusega

arvutaPüramiidiRuumala(alusePindala, kõrgus);
