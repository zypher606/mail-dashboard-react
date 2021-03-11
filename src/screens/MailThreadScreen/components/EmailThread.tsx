import { Avatar, Button, Chip, Menu, MenuItem, Popover, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Accordion } from '../../../components';
import { emailThread } from '../mock-data/emails';
import { useStyles } from '../styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ReplyIcon from '@material-ui/icons/Reply';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function EmailThread({ thread, handleReply }: any) {

  const classes = useStyles();
  const history = useHistory();

  const [selectedDetailTo, setSelectedDetailTo] = useState('');
  const [selectedDetailCc, setSelectedDetailCc] = useState('');

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleDetailsPreview = (event: any, { to, cc}: any) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setSelectedDetailTo(to);
    setSelectedDetailCc(cc);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const truncateData = (data: string) => {
    if (data.length < 20) return data;
    return data.slice(0, 20) + '...';
  }


  return (
    <div>
      {
        thread.map(({id, from, received_by, to, cc, subject, body, date, thread_id}: any, index: number) => (
          <Accordion 
            key={index}
            openDefault={index === thread.length - 1}
            fixed={index === thread.length - 1}
            heading={
              <div>
                
                {
                  index === 0 &&
                  <div className={classes.threadHeading}>
                    <IconButton onClick={() => history.goBack()} className={classes.backBtn} aria-label="back">
                      <KeyboardBackspaceIcon />
                    </IconButton>
                    {subject}
                    <br/>
                  </div>
                } 
                <div className={classes.emailThreadHeading}>
                  
                  <Avatar className={classes.emailThreadHeadingAvatar}>H</Avatar>
                  
                  <div className={classes.emailThreadMessageTruncated}>
                    <Typography className={classes.emailThreadMessageUsername}>{received_by}</Typography>
                    <div className={`details-button`}>
                      <Typography
                        onClick={(e) => handleDetailsPreview(e, {to, cc})}
                        className={classes.detailsTextContainer}
                      >
                        Details <KeyboardArrowDownIcon className={classes.detailsIcon} />
                      </Typography>
                      
                    </div>
                    <div className={`email-accordion-body`}>
                      {truncateData(body)}
                    </div>
                  </div>

                  <Typography className={classes.emailThreadDate}>{date}</Typography>
                  
                  
                </div>

              </div>
              
            }
            body={
              <div>
                <Typography>
                  {body}                
                </Typography>

                {
                  index === thread.length - 1 &&
                  <Button 
                    variant="outlined" 
                    startIcon={<ReplyIcon />} 
                    className={classes.replyActionBtn}
                    onClick={() => handleReply({thread_id, cc, to: from, subject})}
                  >
                    Reply
                  </Button>
                }
              </div>
            }
          />
        ))
      }

        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={classes.popupMenu}
        >
          {
            selectedDetailTo &&
            <MenuItem>To: {selectedDetailTo.split(',').map((item: string) => <Chip className={classes.popupDetailChips} size="small" variant="outlined" label={item} />)}</MenuItem>
          }
          {
            selectedDetailCc &&
            <MenuItem>Cc: {selectedDetailCc.split(',').map((item: string) => <Chip className={classes.popupDetailChips} size="small" variant="outlined" label={item} />)}</MenuItem>
          }
        </Menu>
      
    </div>
  )
}

