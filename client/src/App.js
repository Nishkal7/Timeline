import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import {getPosts} from './actions/posts';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const Classes = useStyles();
    const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getPosts());
  },[currentId, dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={Classes.appBar} position="static" color="inherit">
        <Typography className={Classes.heading} variant="h4" align="center">
          WISHLIST
        </Typography>
        {/* <img className={Classes.image} src={url} alt="memories" height="60" /> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={Classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}> <Posts setCurrentId={setCurrentId}/> </Grid>
            <Grid item xs={12} sm={4}> <Form currentId={currentId} setCurrentId={setCurrentId}/></Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
