import React, { useEffect, useState } from 'react';
import { ComposeEmail, Navigation, Sidebar } from '../../components';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { sideDrawerWidth as drawerWidth } from '../../styles';
import { Button, Container, Grid, Hidden, Paper, Snackbar, useMediaQuery } from '@material-ui/core';
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
import { connect } from '../../stores';
import { emailFetchAll, userSessionFetch, emailMarkDelete } from "../../stores/actions";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './mailboxScreen.scss';
import { Alert } from '@material-ui/lab';

interface IMailboxScreen {
  user: any;
  email: any;
  history: any;
}

export const MailboxScreen = connect()(({user, email, history}: IMailboxScreen) => {

  const classes = useStyles();
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchBoxFocused, setSearchBoxFocused] = useState(false);
  const [isComposeEmailDialogOpen, setIsComposeEmailDialogOpen] = useState(false);
  const [openEmailDeleteSuccess, setOpenEmailDeleteSuccess] = useState(false);
  
  const selectedEmails = new Set(); 

  const handleDrawerStateChange = (state: boolean) => {
    setIsDrawerOpen(state);
  }

  useEffect(() => {
    userSessionFetch();
    emailFetchAll();
  }, []);

  const handleEmailSelection = (id: string, checked: boolean) => {
    if (checked) {
      selectedEmails.add(id);
    } else {
      selectedEmails.delete(id);
    }
  }

  const handleEmailDelete = () => {
    if (selectedEmails.size === 0) return;
    emailMarkDelete({ids: Array.from(selectedEmails).join(',')});
    setOpenEmailDeleteSuccess(true);
    handleRefresh();
  }

  const handleRefresh = () => {
    emailFetchAll();
  }

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
            <Paper>
              <Container className="inbox-container">
                <div className="header-bar">
                  <span className="inbox-container-header">Inbox ({email.emails ? email.emails.length : 0})</span>

                  <Hidden only={['sm', 'xs']}>
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
                  </Hidden>
                  
                </div>
                <div className="inbox-container-action-bar">

                    <Hidden only={['lg', 'md']}>
                      <IconButton onClick={handleRefresh} className={classes.iconButtons} color="default" component="span">
                          <CachedIcon />
                      </IconButton>
                    </Hidden>
                    
                    <Hidden only={['sm', 'xs']}>
                      <Button
                        variant="contained"
                        color="default"
                        onClick={handleRefresh}
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
                    </Hidden>


                    <IconButton onClick={handleEmailDelete} className={classes.iconButtons} color="default" component="span">
                      <DeleteOutlineIcon />
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
                  <EmailList emails={email.emails || []} handleEmailSelection={handleEmailSelection} />
              </Container>
            </Paper>
          </Grid>
          
        </Grid>

        <Hidden only={['lg']}>
          <Fab className={classes.composeFabBtn} color="secondary" aria-label="add">
            <AddIcon onClick={() => setIsComposeEmailDialogOpen(true)} />
          </Fab>
        </Hidden>
      </Container>

      <ComposeEmail from={user?.profile?.email} open={isComposeEmailDialogOpen} handleClose={() => setIsComposeEmailDialogOpen(false)} />
      
      <Snackbar open={openEmailDeleteSuccess} autoHideDuration={6000} onClose={() => setOpenEmailDeleteSuccess(false)}>
        <Alert onClose={() => setOpenEmailDeleteSuccess(false)} severity="success">
          Email(s) deleted!
        </Alert>
      </Snackbar>
    </div>
  )
})