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
import { IconButton, InputAdornment, TextareaAutosize, TextField } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { MailOutline, LockOpen, Send as SendIcon } from "@material-ui/icons";

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
  handleClose: (...args: any) => void;
}

export const ComposeEmail = ({
  open,
  handleClose,
}: IComposeEmail) => {
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');

  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
            id="email"
            // value={email}
            // onChange={({target: { value }}: any) => setEmail(value)}
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
            id="email"
            // value={email}
            // onChange={({target: { value }}: any) => setEmail(value)}
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
            rows={5}
            variant="filled"
            placeholder="Your email body"
          />
        </DialogContent>
        <DialogActions>
         
          <Button 
            onClick={handleClose} 
            color="secondary"
            variant="contained"
            className={classes.sendButton}
            startIcon={<SendIcon />}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
