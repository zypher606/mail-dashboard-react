import React from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { Avatar, Grid, useMediaQuery } from '@material-ui/core';
import { Badge } from '../../../components';
import AttachmentIcon from '@material-ui/icons/Attachment';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../../appRoutes/RouteMappings';
import { emailMarkRead } from "../../../stores/actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

interface IEmailList {
  emails: any[];
  handleEmailSelection: any;
}

export default function EmailList({emails, handleEmailSelection}: IEmailList) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const history = useHistory();
  const theme = useTheme();

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleMailOpen = (id: string, thread_id: string) => {
    emailMarkRead({id});
    history.push(Routes.MAILBOX_THREAD(thread_id));
  }

  const handleEmailCheckboxChange = (e: any, id: string) => {
    e.stopPropagation();
    handleEmailSelection(id, e.target.checked);
  }

  const isMobile = !useMediaQuery(theme.breakpoints.up('sm'));


  return (
    <List className={classes.root}>
      {emails.map(({from, subject, body, id, is_read, thread_id}: any) => {
        const labelId = `checkbox-list-label-${id}`;

        return (
          <ListItem key={id} role={undefined} dense button onClick={() => handleMailOpen(id, thread_id)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => handleEmailCheckboxChange(e, id)}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <Grid container spacing={1}>
              <Grid item xs={isMobile ? 4 : 5}>
                {
                  isMobile ? 
                    <Avatar>
                      {from ? from[0].toUpperCase() : ''}
                    </Avatar> :
                    <ListItemText id={labelId} primary={from} />
                }   
                
              </Grid>
              <Grid item xs={isMobile ? 4 : 1}>
                <ListItemText>
                  {
                    is_read !== true &&
                    <Badge color={'#ee524d'}>New</Badge>
                  }
                </ListItemText>
              </Grid>
              {
                !isMobile &&
                <Grid item xs={3}>
                  <ListItemText id={labelId} primary={body} />
                </Grid>
              }
              {
                !isMobile && 
                <Grid item xs={1}>
                  <ListItemText id={labelId} primary={<AttachmentIcon/>} />

                </Grid>
              }
              
              <Grid item xs={2}>
                <ListItemSecondaryAction>
                  6:10 am
                </ListItemSecondaryAction>
              </Grid>
            </Grid>
          </ListItem>
        );
      })}
    </List>
  );
}