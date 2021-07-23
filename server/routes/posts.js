const express = require('express');
const { auth } = require('../middleware/auth.js');
const posts = require('../controllers/posts.js');

const router = express.Router();

router.get('/search', posts.getPostsBySearch);
router.get('/', posts.getPosts);
router.post('/', auth, posts.createPost);
router.patch('/:id', auth, posts.updatePost);
router.delete('/:id', auth, posts.deletePost);
router.patch('/:id/likePost', auth, posts.likePost);

module.exports = router;
