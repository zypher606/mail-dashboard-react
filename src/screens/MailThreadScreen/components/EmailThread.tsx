import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import { Accordion } from '../../../components';
import { emailThread } from '../mock-data/emails';
import { useStyles } from '../styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

export default function EmailThread() {

  const classes = useStyles();

  return (
    <div>
      <h5>Sahaj: Coding Assignment - UI</h5>
      {
        emailThread.emails.map(({id, from, to, cc, message, date}: any, index: number) => (
          <Accordion 
            key={index}
            openDefault={index === emailThread.emails.length - 1}
            heading={
              <div>
                {
                  index === 0 &&
                  <div className={classes.emailSubject}>
                    {emailThread.subject}
                    <br/>
                  </div>
                } 
                <div className={classes.emailThreadHeading}>
                  
                  <Avatar className={classes.emailThreadHeadingAvatar}>H</Avatar>
                  
                  <div className={classes.emailThreadMessageTruncated}>
                    <Typography className={classes.emailThreadMessageUsername}>{to.name}</Typography>
                    <div className={classes.emailThreadMessageTruncated}>{message}</div>
                  </div>

                  <Typography className={classes.emailThreadDate}>{date}</Typography>
                  
                  
                </div>

              </div>
              
            }
            body={
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
              </Typography>
            }
          />
        ))
      }
      
    </div>
  )
}

