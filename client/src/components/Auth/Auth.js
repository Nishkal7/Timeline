import React,{useState} from "react";
import {
  Container,
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";
import Input from "./Input";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from "./styles";

const Auth = () => {
  const Classes = useStyles();
  const [showPassword, setShowPassword] = useState(false)
  const isSignup = true;
  const state = null;

  const handleSubmit = () => {
    console.log("Submit Clicked");
  };

  const handleChange = () => {
    console.log("Input Change occured");
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={Classes.paper} elevation={3}>
        <Avatar className={Classes.Avatar}><LockOutlinedIcon /></Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={Classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input 
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
          { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={Classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;