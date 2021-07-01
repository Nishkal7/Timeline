import React from 'react';
import Post from './post/post';
import useStyles from './styles';

const Posts = () => {
    const Classes = useStyles();
    return (
        <>
        <h1>Posts</h1>
        <Post />
        <Post />
        </>
    );
}

export default Posts;