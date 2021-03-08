import React, { forwardRef, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton, InputAdornment, Snackbar, TextareaAutosize, TextField } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { MailOutline, LockOpen, Send as SendIcon } from "@material-ui/icons";
import { emailAdd } from "../../stores/actions";
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    closeBtn: {
      float: 'right',
    },
    sendButton: {
      color: '#fff',
      marginRight: theme.spacing(2),
    }

  }),
);

interface IComposeEmail {
  open: boolean;
  from: string;
  handleClose: (...args: any) => void;
}

export const ComposeEmail = ({
  open,
  from,
  handleClose,
}: IComposeEmail) => {
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');
  const [emailTo, setEmailTo] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [openEmailSentSuccess, setOpenEmailSentSuccess] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSend = () => {
    emailAdd({ to: emailTo, from, subject: emailSubject, body: emailBody });
    setOpenEmailSentSuccess(true);
    handleClose();
  }

  const validateEmail = () => {
    if (emailTo.length < 1) return false;
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailTo);
  };

  return (
    <div>
      <Dialog
        open={open}
        scroll={scroll}
        fullScreen={fullScreen}
        onClose={handleClose}
      >
        <DialogTitle>
          New Message

          <IconButton onClick={handleClose} aria-label="delete" className={classes.closeBtn}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            id="email_to"
            value={emailTo}
            onChange={({target: { value }}: any) => setEmailTo(value)}
            // onKeyDown={handleKeyPress}
            // error={!validateEmail()}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  To:
                </InputAdornment>
              )
            }}
          />
          <TextField
            required
            id="email_subject"
            value={emailSubject}
            onChange={({target: { value }}: any) => setEmailSubject(value)}
            // onKeyDown={handleKeyPress}
            // error={!validateEmail()}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  Subject:
                </InputAdornment>
              )
            }}
          />
          <TextField
            fullWidth
            multiline
            value={emailBody}
            onChange={({target: { value }}: any) => setEmailBody(value)}
            rows={5}
            variant="filled"
            placeholder="Your email body"
          />
        </DialogContent>
        <DialogActions>
         
          <Button 
            onClick={handleSend} 
            disabled={!validateEmail() || emailSubject === '' || emailBody === ''}
            color="secondary"
            variant="contained"
            className={classes.sendButton}
            startIcon={<SendIcon />}>
            Send
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={openEmailSentSuccess} autoHideDuration={6000} onClose={() => setOpenEmailSentSuccess(false)}>
        <Alert onClose={() => setOpenEmailSentSuccess(false)} severity="success">
          Email sent!
        </Alert>
      </Snackbar>
    </div>
  );
}
