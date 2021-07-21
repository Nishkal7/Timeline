import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, AppBar, Typography } from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts } from "../../actions/posts";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

const Home = () => {

    const [currentId, setCurrentId] = useState(null);
    const Classes = useStyles();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);

  return (
    <div>
      <Grow in>
        <Container>
          <Grid
            className={Classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              {" "}
              <Posts setCurrentId={setCurrentId} />{" "}
            </Grid>
            <Grid item xs={12} sm={4}>
              {" "}
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      {/* <AppBar position="static" className={Classes.footerContainer}>
        <Container maxWidth="sm" className={Classes.footer2Container}>
          <Typography variant="body1">Created by Nishkal</Typography>
        </Container>
      </AppBar> */}
    </div>
  );
};

export default Home;
