import {
  makeStyles, Theme
} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: '#f1f1f1',
    minHeight: '100vh',
  },
  card: {
    minWidth: 275,
    marginTop: '10vh',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  action: {
    display: 'block',
  },
  registerButton : {
    float: 'right',
    color: '#fff',
  },
  loginLinkButton: {
    color: '#000',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  }
}));