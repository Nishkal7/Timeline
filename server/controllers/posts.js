const PostMessage = require('../models/postMessage.js');

const getPosts = (req,res) => {
    res.send('This is working!!!');
}

const createPost = (req,res) => {
    res.send('Post Created!!!');
}



module.exports= {
    getPosts: getPosts,
    createPost:createPost,
}