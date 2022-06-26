
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';





const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: 'left',
    justifyContent: "left",
    alignItems: "left",
    display: 'flex',
    '& > *': {
      margin: theme.spacing(12),
    },
  },
  input: {
    display: "none",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function FormFile() {
  const classes = useStyles();


  return (

    <div className={classes.root}>

      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <Avatar src="https://www.w3schools.com/howto/img_avatar.png" className={classes.large} />
        </IconButton>
      </label>
    </div>
    
  );
}