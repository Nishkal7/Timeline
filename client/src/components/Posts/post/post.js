import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

import useStyles from "./styles";
const Post = ({ post, setCurrentId }) => {
  const Classes = useStyles();
  return (
    <Card className={Classes.card}>
      <CardMedia
        className={Classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={Classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={Classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={Classes.details}>
        <CardContent>
          <Typography
            className={Classes.tag}
            variant="body2"
            color="textSecondary"
          >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography className={Classes.tag} variant="h5" gutterBottom>
            {post.title}
          </Typography>

          <Typography className={Classes.title} variant="h6" gutterBottom>
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={Classes.cardActions}>
          <Button size="small" color="primary" onClick={() => {}}>
            <ThumbUpAltIcon fontSize="small" />
            Like
            {post.likeCount}
          </Button>
          <Button size="small" color="primary" onClick={() => {}}>
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default Post;
