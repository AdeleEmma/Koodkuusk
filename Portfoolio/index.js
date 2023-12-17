const express = require('express');
const app = express();
const port = 3000;

// Staatilise sisu jaoks kasuta public kausta
app.use(express.static('public'));

// Avaleht
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// About
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

// Kontakt
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

// Kuula serverit portil 3000
app.listen(port, () => {
  console.log(`Server kuulab portil ${port}`);
});
