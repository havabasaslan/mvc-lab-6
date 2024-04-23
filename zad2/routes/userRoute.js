const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ustawienie kontrolera błędów dla każdego żądania, które nie pasuje do innych tras
router.get('/set', userController.getSetUserSession);
router.post('/set', userController.setUserSession);

module.exports = router;
