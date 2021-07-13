import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Grow,
  Grid,
  AppBar,
  Typography,
} from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import Navbar from "../../client/src/components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const Classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <Navbar />
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
      <AppBar position="static" className={Classes.footerContainer}>
        <Container maxWidth="sm" className={Classes.footer2Container}>
          <Typography variant="body1">Created by Nishkal</Typography>
        </Container>
      </AppBar>
    </Container>
  );
};

export default App;
