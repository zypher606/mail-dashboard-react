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
import EmailThread from './components/EmailThread';
import { useStyles } from './styles';
import './mailThreadScreen.scss';


export const MailThreadScreen = () => {

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
            <EmailThread />
          </Grid>
          
        </Grid>
      </Container>
    </div>
  )
}