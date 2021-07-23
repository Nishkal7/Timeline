import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import wishListIcon from "../../images/wishListIcon.png";

const Navbar = () => {
  const Classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  console.log("NAV USER", user);
  return (
    <div>
      <AppBar className={Classes.appBar} position="static" color="inherit">
        <div className={Classes.brandContainer}>
          <Button
            component={Link}
            to="/"
            // className={Classes.heading}
            // variant="h5"
            // align="center"
          >
            <img
              className={Classes.image}
              src={wishListIcon}
              alt="memories"
              height="60"
            />
          </Button>
        </div>
        <Toolbar className={Classes.toolbar}>
          {user ? (
            <div className={Classes.profile}>
              <Avatar alt={user.result.name} src={user.result.imageUrl}>
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={Classes.userName} variant="h6">
                {user.result.name}
              </Typography>
              <Button
                variant="contained"
                className={Classes.logout}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Button
                component={Link}
                to="/auth"
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
