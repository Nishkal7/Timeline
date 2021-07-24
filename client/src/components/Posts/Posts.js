import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./post/post";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const Classes = useStyles();

  if(!posts.length && !isLoading) return 'No Posts';

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={Classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
