import React, { ChangeEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import VnSimpleMenu from './VnSimpleMenu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

// const goToHomePage = () => {
//   <Link to="/Home">Home</Link>
// };

export default function VnAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Link to="/Home">
            <HomeTwoToneIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" color="inherit">
            NetEntreprise (simulateur)
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}