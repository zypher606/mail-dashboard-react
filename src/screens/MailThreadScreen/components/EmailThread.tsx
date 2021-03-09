import { Avatar, Button, Typography } from '@material-ui/core';
import React from 'react';
import { Accordion } from '../../../components';
import { emailThread } from '../mock-data/emails';
import { useStyles } from '../styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ReplyIcon from '@material-ui/icons/Reply';

export default function EmailThread({ thread, handleReply }: any) {

  const classes = useStyles();

  return (
    <div>
      {
        thread.map(({id, from, to, cc, subject, body, date, thread_id}: any, index: number) => (
          <Accordion 
            key={index}
            openDefault={index === thread.length - 1}
            fixed={index === thread.length - 1}
            heading={
              <div>
                {
                  index === 0 &&
                  <div className={classes.emailSubject}>
                    {subject}
                    <br/>
                  </div>
                } 
                <div className={classes.emailThreadHeading}>
                  
                  <Avatar className={classes.emailThreadHeadingAvatar}>H</Avatar>
                  
                  <div className={classes.emailThreadMessageTruncated}>
                    <Typography className={classes.emailThreadMessageUsername}>{to}</Typography>
                    <div className={classes.emailThreadMessageTruncated}>{body}</div>
                  </div>

                  <Typography className={classes.emailThreadDate}>{date}</Typography>
                  
                  
                </div>

              </div>
              
            }
            body={
              <div>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                
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
      
    </div>
  )
}

