import React, { forwardRef, useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton, InputAdornment, Snackbar, TextareaAutosize, TextField, Chip as MuiChip } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { MailOutline, LockOpen, Send as SendIcon } from "@material-ui/icons";
import { emailAdd } from "../../stores/actions";
import Alert from '@material-ui/lab/Alert';
import { Badge } from '..';
import ChipInput from 'material-ui-chip-input';

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
    },
    emailChip: {
      marginLeft: '3px',
      marginRight: '3px',
    },
    chipInputs: {
      marginBottom: '20px',
    },
    inputTextFields: {
      marginTop: '6px',
    },
    inputTextFieldsBody: {
      marginTop: '12px'
    },
    importantLabel: {
      color: 'red',
    }
  }),
);

interface IComposeEmail {
  open: boolean;
  from: string;
  to?: string;
  cc?: string;
  isReply?: boolean;
  subject?: string;
  thread_id?: string;
  handleClose: (...args: any) => void;
  handleEmailSendSuccess?: () => void;
}

export const ComposeEmail = ({
  open,
  from,
  to,
  cc,
  thread_id,
  subject,
  isReply = false,
  handleClose,
  handleEmailSendSuccess = () => {},
}: IComposeEmail) => {

  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');
  const [emailSubject, setEmailSubject] = useState(subject ? subject : '');
  const [emailBody, setEmailBody] = useState('');
  const [openEmailSentSuccess, setOpenEmailSentSuccess] = useState(false);
  const [openIncorrectEmailWarning, setOpenIncorrectEmailWarning] = useState(false);
  const [emailListTo, setEmailListTo] = useState<string[]>([]);
  const [emailListCc, setEmailListCc] = useState<string[]>([]);

  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSend = () => {
    const payload = { to: emailListTo.join(','), cc: emailListCc.join(','), from, subject: emailSubject, body: emailBody }
    if (isReply) {
      emailAdd({ ...payload, thread_id });
    } else {
      emailAdd(payload);
    }
    setOpenEmailSentSuccess(true);
    handleClose();
    handleEmailSendSuccess();
  }

  const validateEmail = (email: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const handleAddEmailToListTo = (email: string) => {
    if (validateEmail(email)) {
      if (!emailListTo.includes(email)) {
        setEmailListTo([...emailListTo, email]);
      }
    } else {
      setOpenIncorrectEmailWarning(true);
    }
  }

  const handleDeleteEmailFromListTo = (email: string) => {
    const result = emailListTo.filter(item => item !== email);
    setEmailListTo(result);
  }

  const handleAddEmailToListCc = (email: string) => {
    if (validateEmail(email)) {
      if (!emailListCc.includes(email)) {
        setEmailListCc([...emailListCc, email]);
      }
    } else {
      setOpenIncorrectEmailWarning(true);
    }
  }

  const handleDeleteEmailFromListCc = (email: string) => {
    const result = emailListCc.filter(item => item !== email);
    setEmailListCc(result);
  }

  useEffect(() => {
    setEmailListTo(to ? [to] : []);
    setEmailListCc(cc ? [cc] : []);
    setEmailSubject(subject ? subject : '');
  }, [to, subject, cc])

  return (
    <div>
      <Dialog
        open={open}
        scroll={scroll}
        fullScreen={fullScreen}
        onClose={handleClose}
      >
        <DialogTitle data-testid="email-isReply">
          {
            isReply ? 'Reply' : 'New Message'
          }

          <IconButton onClick={handleClose} aria-label="delete" className={classes.closeBtn}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent>

          <label>To: <span className={classes.importantLabel}>*</span> </label>
          <ChipInput
            className={classes.chipInputs}
            fullWidth={true}
            defaultValue={emailListTo}
            value={emailListTo}
            placeholder="Destination email address"
            onAdd={(chip) => handleAddEmailToListTo(chip)}
            onDelete={(chip) => handleDeleteEmailFromListTo(chip)}
          />

          <label>Cc: </label>
          <ChipInput
            className={classes.chipInputs}
            fullWidth={true}
            defaultValue={emailListCc}
            value={emailListCc}
            placeholder="Looped email ids"
            onAdd={(chip) => handleAddEmailToListCc(chip)}
            onDelete={(chip) => handleDeleteEmailFromListCc(chip)}
          />
           
          
          <label>Subject: <span className={classes.importantLabel}>*</span> {isReply ? 'Re - ' : ''}</label>
          <TextField
            required
            data-testid="email-subject"
            id="email_subject"
            name="email_subject"
            className={classes.inputTextFields}
            value={emailSubject}
            disabled={isReply}
            onChange={({target: { value }}: any) => setEmailSubject(value)}
            margin="normal"
            fullWidth
            placeholder="Your email subject"
            
          />
          <TextField
            fullWidth
            multiline
            value={emailBody}
            className={classes.inputTextFieldsBody}
            onChange={({target: { value }}: any) => setEmailBody(value)}
            rows={5}
            variant="filled"
            placeholder="Your email body"
          />
        </DialogContent>
        <DialogActions>
         
          <Button 
            onClick={handleSend} 
            disabled={emailListTo.length === 0 || emailSubject === '' || emailBody === ''}
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

      <Snackbar open={openIncorrectEmailWarning} autoHideDuration={6000} onClose={() => setOpenIncorrectEmailWarning(false)}>
        <Alert onClose={() => setOpenIncorrectEmailWarning(false)} severity="warning">
          Incorrect email format!
        </Alert>
      </Snackbar>
    </div>
  );
}
