const express = require('express');
const users = require('../controllers/users.js')

const router = express.Router();

router.post('/sigin', users.signin);
router.post('/sigin', users.signup);

module.exports = router;