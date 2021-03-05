import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { Grid } from '@material-ui/core';
import { Badge } from '../../../components';
import AttachmentIcon from '@material-ui/icons/Attachment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);


export default function EmailList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

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

  return (
    <List className={classes.root}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <ListItemText id={labelId} primary={`Line ${value + 1}`} />

              </Grid>
              <Grid item xs={2}>
                <ListItemText>
                  <Badge color={'#ee524d'}>Hello</Badge>
                </ListItemText>
              </Grid>
              <Grid item xs={5}>
                <ListItemText id={labelId} primary="Email details in here" />
              </Grid>
              <Grid item xs={1}>
                <ListItemText id={labelId} primary={<AttachmentIcon/>} />

              </Grid>
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