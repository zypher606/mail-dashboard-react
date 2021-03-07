import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button, Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  InputAdornment, Snackbar, TextField
} from "@material-ui/core";
import { MailOutline, LockOpen, Face as FaceIcon } from "@material-ui/icons";
import { useStyles } from "./styles";
import { userSignup } from "../../stores/actions";
import { useHistory } from "react-router-dom";
import { Routes } from "../../appRoutes/RouteMappings";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { connect } from '../../stores';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const RegisterScreen = connect()(({user}: any) => {

  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openRegistrationSuccess, setOpenRegistrationSuccess] = useState(false);
  const [openRegistrationError, setOpenRegistrationError] = useState(false);

  const history = useHistory();

  const handleValidation = () => {
    return validateEmail() && password.length > 4 && validateName();
  };

  const validateEmail = () => {
    if (email.length < 1) return false;
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const validateName = () => {
    return name.length > 0 && /^[a-zA-Z]+ [a-zA-Z]+$/i.test(name);
  }

  const handleKeyPress = (e: any) => {
    if (/enter/gi.test(e.key) && handleValidation()) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    userSignup({name, email, password});
    
  };

  useEffect(() => {

    if (user && user.newUser) {
      setOpenRegistrationSuccess(true);
      setTimeout(() => history.push(Routes.LOGIN), 2000);
      // history.push(Routes.LOGIN);
      return;
    }

    if (user && user.error) {
      setOpenRegistrationError(true);
      return;
    }
   
  }, [user])

  const handleNavigationToLogin = () => {
    history.push(Routes.LOGIN);
  }
 
  return (
    <div className={classes.container}>
      <Container>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          style={{ minHeight: "90vh" }}>
          <Grid item xs={10} sm={4}>
            <Card className={classes.card}>
              <CardHeader
                  avatar={<Avatar className={classes.avatar}> A </Avatar>}
                  title="Dashboard Access"
                />
              <CardContent>
                <TextField
                  required
                  id="name"
                  label="Full name"
                  value={name}
                  onChange={({target: { value }}: any) => setName(value)}
                  onKeyDown={handleKeyPress}
                  error={!validateName()}
                  margin="normal"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaceIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  required
                  id="email"
                  label="Email"
                  helperText="email@example.com"
                  value={email}
                  onChange={({target: { value }}: any) => setEmail(value)}
                  onKeyDown={handleKeyPress}
                  error={!validateEmail()}
                  margin="normal"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutline />
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  required
                  id="password"
                  label="Password"
                  helperText=""
                  value={password}
                  type="password"
                  onChange={({target: { value }}: any) => setPassword(value)}
                  onKeyDown={handleKeyPress}
                  margin="normal"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOpen />
                      </InputAdornment>
                    )
                  }}
                />
              </CardContent>
              <CardActions className={classes.action}>
              <Button
                  className={classes.loginLinkButton}
                  onClick={handleNavigationToLogin}
                >Already Registered?</Button>
                <Button
                  onClick={handleSubmit}
                  disabled={!handleValidation()}
                  color="secondary"
                  className={classes.registerButton}
                  variant="contained">
                  Register
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={openRegistrationSuccess} autoHideDuration={6000} onClose={() => setOpenRegistrationSuccess(false)}>
        <Alert onClose={() => setOpenRegistrationSuccess(false)} severity="success">
          User registered successfully! Please login.
        </Alert>
      </Snackbar>

      <Snackbar open={openRegistrationError} autoHideDuration={6000} onClose={() => setOpenRegistrationError(false)}>
        <Alert onClose={() => setOpenRegistrationError(false)} severity="error">
          User already registered!
        </Alert>
      </Snackbar>
    </div>
  );
})
