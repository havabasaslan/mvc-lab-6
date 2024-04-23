const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./routes/userRoute');
const bookRoutes = require('./routes/bookRoute');

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

// Zintegruj nowo dodane moduły tras z aplikacją
app.use('/user', userRoutes);
app.use('/books', bookRoutes);

const PORT = 3000; // lub dowolny inny port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
