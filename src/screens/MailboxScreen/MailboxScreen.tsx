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
import { useStyles } from './styles';
import './mailboxScreen.scss';


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