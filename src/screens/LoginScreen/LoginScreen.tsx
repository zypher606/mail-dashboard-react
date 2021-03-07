import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button, Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  InputAdornment, TextField
} from "@material-ui/core";
import { MailOutline, LockOpen } from "@material-ui/icons";
import { useStyles } from "./styles";
import { userSignin } from "../../stores/actions";
import { connect } from '../../stores';

interface ILoginScreen {
  user: any;
  history: any;
}
export const LoginScreen = connect()(({ user, history}: ILoginScreen) => {

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleValidation = () => {
    return validateEmail() && password.length > 4;
  };

  const validateEmail = () => {
    if (email.length < 1) return false;
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const handleKeyPress = (e: any) => {
    if (/enter/gi.test(e.key) && handleValidation()) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    userSignin({ email, password });
  };

  useEffect(() => {
    if (user && user.profile) {
      history.push('/mailbox');
    }
  }, [user])

  

  
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
                  onClick={handleSubmit}
                  disabled={!handleValidation()}
                  color="secondary"
                  className={classes.button}
                  variant="contained">
                  Login
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
});
