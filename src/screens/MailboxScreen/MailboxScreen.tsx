import React, { useState } from 'react';
import { Navigation, Sidebar } from '../../components';
import { fade, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { sideDrawerWidth as drawerWidth } from '../../styles';
import { Button, Container, Grid, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import CachedIcon from '@material-ui/icons/Cached';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from '@material-ui/core/IconButton';
import EmailList from './components/EmailList';
import './mailboxScreen.scss';

export const useStyles = makeStyles((theme: any) => ({
  grow: {
    flexGrow: 1,
  },
  container: {
    marginTop: '64px',
    paddingTop: '18px',
    marginLeft: '74px',
    width: `calc(100% - 74px)`,
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

}));

export const MailboxScreen = () => {

  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchBoxFocused, setSearchBoxFocused] = useState(false);

  const handleDrawerStateChange = (state: boolean) => {
    setIsDrawerOpen(state);
  }

  return (
    <div className="dashboard-container">
      <Navigation handleDrawerToggle={handleDrawerStateChange}/>

      <Container
        className={clsx(classes.container, {
          [classes.containerShift]: isDrawerOpen,
        })}
        style={
          isDrawerOpen ? {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
          } : {}
        }
      >

        

        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            <Paper>
              <Container className="inbox-container">
                <div className="header-bar">
                  <span className="inbox-container-header">Inbox (16)</span>

                  <Button variant="contained" color="secondary" className={classes.searchActionBtn}>Search</Button>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder={searchBoxFocused ? 'Search for emails' : 'Search...'}
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                      onFocus={() => setSearchBoxFocused(true)}
                      onBlur={() => setSearchBoxFocused(false)}
                    />
                  </div>
                  
                </div>
                <div className="inbox-container-action-bar">
                    <Button
                      variant="contained"
                      color="default"
                      startIcon={<CachedIcon />}
                    >
                      Refresh
                    </Button>
                    <IconButton className={classes.iconButtons} color="default" component="span">
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton className={classes.iconButtons} color="default" component="span">
                      <PriorityHighIcon />
                    </IconButton>
                    <IconButton className={classes.iconButtons} color="default" component="span">
                      <DeleteOutlineIcon />
                    </IconButton>
                    <IconButton className={classes.iconButtons} color="default" component="span">
                      <VisibilityIcon />
                    </IconButton>
                  </div>
                  <div className="pagination-bar">
                    <IconButton className={classes.paginationButtons} color="default" component="span">
                      <ArrowBackIcon />
                    </IconButton>
                    <IconButton className={classes.paginationButtons} color="default" component="span">
                      <ArrowForwardIcon />
                    </IconButton>
                  </div>
                  <br/>
                  <EmailList />
              </Container>
            </Paper>
          </Grid>
          
        </Grid>
      </Container>
    </div>
  )
}