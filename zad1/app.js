const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const errorRoutes = require('./routes/error');
const errorController = require('./controllers/error');

const app = express();

// Ustawienie katalogu plików statycznych
app.use(express.static(path.join(__dirname, 'public')));

// Skonfiguruj silnik widoków na EJS
app.set('view engine', 'ejs');

// Skonfiguruj sesję
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

// Dodaj middleware bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

// Dodaj routing dla obsługi błędów
app.use('*', errorRoutes);

const PORT = 3000; // lub dowolny inny port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
