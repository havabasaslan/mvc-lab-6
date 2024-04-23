const express = require('express');
const router = express.Router();
const errorController = require('../controllers/error');

// Ustawienie kontrolera błędów dla każdego żądania, które nie pasuje do innych tras
router.use('*', errorController.getNotFoundPage);

module.exports = router;
