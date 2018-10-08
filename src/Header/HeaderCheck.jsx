import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'


const styles =theme=>({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  Button:{
    fontSize:12,
    margin:theme.spacing.unit
  },
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} color="primary" aria-label="Menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="display1" color="inherit" className={classes.grow} component={Link} to="/">
            CarVilla
          </Typography>
          <Button color="inherit" variant="text" className={classes.Button} component={Link} to="/carList">
            Car Listing
          </Button>
          <Button color="inherit" variant="text" className={classes.Button} component={Link} to="/carList">
            Upcoming Cars
          </Button>
          <Button color="inherit" variant="text" className={classes.Button} component={Link} to="/carList">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ButtonAppBar);