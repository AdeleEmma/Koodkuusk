function prindiNumbridJaSõnumid() {
  for (let number = 1; number <= 100; number++) {
    let message = '';

    if (number % 3 === 0) {
      message += 'Tallinna';
    }

    if (number % 5 === 0) {
      message += 'Prantsuse';
    }

    if (number === 50) {
      message = 'Tallinna Prantsuse Lütseum';
    }

    if (message === '') {
      message = number;
    }

    console.log(message);
  }
}

// Funktsiooni väljakutse numbreid ja sõnumeid printimiseks
prindiNumbridJaSõnumid();
