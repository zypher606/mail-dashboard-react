import { fade, makeStyles } from '@material-ui/core/styles';
import { sideDrawerWidth as drawerWidth } from '../../styles';

export const useStyles = makeStyles((theme: any) => ({
  grow: {
    flexGrow: 1,
  },
  container: {
    marginTop: '64px',
    paddingTop: '18px',
    marginLeft: '73px',
    width: `calc(100% - 73px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  containerShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${theme.drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  disableContainerShift: {
    marginLeft: '0px',
    width: '100%',
  },
  search: {
    position: 'relative',
    float: 'right',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    border: 'solid 1px #efefef',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  searchActionBtn: {
    float: 'right',
    color: '#fff',
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
  },
  replyActionBtn: {
    marginTop: '25px',
    marginBottom: '20px',
    color: '#000',
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
  },
  iconButtons: {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#e0e0e0',
    borderRadius: '2px',
    height: '12px',
    boxShadow: '0px 3px 1px -2px #00000033, 0px 2px 2px 0px #00000024, 0px 1px 5px 0px #0000001f',
    marginLeft: '4px',
    marginRight: '4px',
  },
  paginationButtons : {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#e0e0e0',
    borderRadius: '2px',
    height: '12px',
    boxShadow: '0px 3px 1px -2px #00000033, 0px 2px 2px 0px #00000024, 0px 1px 5px 0px #0000001f',
  },
  emailThreadHeading: {
    display: 'flex',
  },
  emailThreadHeadingAvatar: {
    marginRight: '10px',
  },
  emailThreadMessageUsername: {
    fontWeight: 'bold',
  },
  
  emailThreadMessageTruncated : {
    fontSize: '15px',
  },
  
  threadHeading: {
    fontSize: '26px',
    // paddingLeft: theme.spacing(6),
    marginBottom: '25px',
    marginTop: '5px',
  },
  emailThreadDate : {

  },
  composeFabBtn: {
    position: 'fixed',
    bottom: '5px',
    right: '5px',
    color: '#fff'
  },
  backBtn: {
    marginLeft: '-6px',
    marginRight: '6px',
  },
  popover: {
    pointerEvents: 'none',
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(1),
  },
  detailsTextContainer: {
    display: 'flex',
    fontSize: '13px',
  },
  detailsIcon: {
    fontSize: '21px',
  },
  popupMenu: {
    marginTop: '10px',
  },
  popupDetailChips: {
    marginLeft: '3px',
    marginRight: '3px',
  }

}));