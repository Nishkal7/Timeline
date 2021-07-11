const express = require('express');
const posts = require('../controllers/posts.js')

const router = express.Router();

router.get('/', posts.getPosts);
router.post('/', posts.createPost);
router.patch('/:id', posts.updatePost);
router.delete('/:id', posts.deletePost);
router.patch('/:id/likePost', posts.likePost);
module.exports = router;
