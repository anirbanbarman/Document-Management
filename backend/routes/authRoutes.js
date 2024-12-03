const express = require('express');
const router = express.Router();
const { login, register, logout } = require('../controllers/authController');

router.post('/login', login);
router.post('/signup', register);
router.post('/logout', logout);

module.exports = router;
