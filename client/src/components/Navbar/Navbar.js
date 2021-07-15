import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import useStyles from "./styles";
import wishListIcon from "../../images/wishListIcon.png";

const Navbar = () => {
  const Classes = useStyles();
  const user = null;
  return (
    <div>
      <AppBar className={Classes.appBar} position="static" color="inherit">
        <div className={Classes.brandContainer}>
          <Typography component={Link} to="/" className={Classes.heading} variant="h5" align="center">
            WISHLIST
          </Typography>
          <img
            className={Classes.image}
            src={wishListIcon}
            alt="memories"
            height="60"
          />
        </div>
        <Toolbar className={Classes.toolbar}>
          {user ?
          <div className={Classes.profile}>
             <Avatar className={Classes.profile} alt={user.result.name} src={user.result.imageUrl}>
                {user.result.name.charAt(0)}
             </Avatar>
             <Typography className={Classes.userName} variant="h6">{user.result.name}</Typography>
             <Button variant="cotained" className={Classes.logout} color="secondary">Logout</Button>
          </div> : 
          <div>
              <Button component={Link} to='/auth' variant="contained" color="primary">Sign In</Button>
          </div>}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
