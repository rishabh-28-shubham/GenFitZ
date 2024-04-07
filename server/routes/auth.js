const express = require('express');
const { signupController, loginController } = require('../controllers/Auth');
const router = express.Router();

// sign up
router.post('/signup' , signupController );
router.post('/login' , loginController);

module.exports = router;
