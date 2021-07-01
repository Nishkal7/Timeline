const express = require('express');
const posts = require('../controllers/posts.js')

const router = express.Router();

router.get('/', posts.getPosts);
router.post('/', posts.createPost);

module.exports = router;
