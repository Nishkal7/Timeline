import React from "react";
import { Link } from 'react-router-dom';
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import wishListIcon from '../../images/wishListIcon.png';

const Navbar = () => {
  const Classes = useStyles();
  return (
    <div>
      <AppBar className={Classes.appBar} position="static" color="inherit">
        <div className= {Classes.brandContainer}>
          {/* <Typography component={Link} to="/" className={Classes.heading} variant="h5" align="center">
            WISHLIST
          </Typography> */}
           <img className={Classes.image} src={wishListIcon} alt="memories" height="60" />
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;
