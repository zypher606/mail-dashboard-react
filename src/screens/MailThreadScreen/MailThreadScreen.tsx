import React, { useEffect, useState } from 'react';
import { ComposeEmail, Navigation, Sidebar } from '../../components';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { sideDrawerWidth as drawerWidth } from '../../styles';
import { Button, Container, Grid, Hidden, Paper, useMediaQuery } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import CachedIcon from '@material-ui/icons/Cached';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from '@material-ui/core/IconButton';
import EmailThread from './components/EmailThread';
import { useStyles } from './styles';
import { emailFetchAll, userSessionFetch, emailFetchThread } from "../../stores/actions";
import { connect } from '../../stores';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useParams } from 'react-router-dom';
import './mailThreadScreen.scss';

interface IMailThreadScreen {
  user: any;
  email: any;
}

export const MailThreadScreen = connect()(({user, email}: IMailThreadScreen) => {

  const classes = useStyles();
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isComposeEmailDialogOpen, setIsComposeEmailDialogOpen] = useState(false);
  const [searchBoxFocused, setSearchBoxFocused] = useState(false);

  const { thread_id }: any = useParams();

  const handleDrawerStateChange = (state: boolean) => {
    setIsDrawerOpen(state);
  }

  useEffect(() => {
    userSessionFetch();
    emailFetchAll();
    emailFetchThread(thread_id);
  }, [])

  const disableSlider = !useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className="dashboard-container">
      <Navigation unreadCount={email.unreadCount} profile={user?.profile} handleDrawerToggle={handleDrawerStateChange}/>

      <Container
        className={clsx(classes.container, {
          [classes.containerShift]: isDrawerOpen && !disableSlider,
          [classes.disableContainerShift]: disableSlider,
        })}
        style={
          isDrawerOpen && !disableSlider? {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
          } : {}
        }
      >

        <Grid container spacing={1}>
          <Hidden only={['md', 'sm', 'xs']}>
            <Grid item lg={3}>
              <Sidebar unreadCount={email.unreadCount} handleComposeMail={() => setIsComposeEmailDialogOpen(true)}  />
            </Grid>
          </Hidden>
          <Grid item lg={9} md={12} xs={12}>
            <EmailThread thread={email.thread || []} />
          </Grid>
          
        </Grid>

        <Hidden only={['lg']}>
          <Fab className={classes.composeFabBtn} color="secondary" aria-label="add">
            <AddIcon onClick={() => setIsComposeEmailDialogOpen(true)} />
          </Fab>
        </Hidden>
        
      </Container>

      

      <ComposeEmail from={''} open={isComposeEmailDialogOpen} handleClose={() => setIsComposeEmailDialogOpen(false)} />
    </div>
  )
})