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
    flexDirection: "row-reverse"
  },
  button : {
    color: '#fff',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  }
}));