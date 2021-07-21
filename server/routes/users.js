const express = require('express');
const users = require('../controllers/users.js')

const router = express.Router();

router.post('/signin', users.signin);
router.post('/signup', users.signup);

module.exports = router;