import {
  makeStyles, Theme
} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: '#f1f1f1',
    minHeight: '100vh',
  },
  card: {
    minWidth: 275
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  action: {
    // flexDirection: "row-reverse"
    display: 'block',
  },
  loginButton : {
    float: 'right',
    color: '#fff',
  },
  registerLinkBtn: {
    color: '#000',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  }
}));