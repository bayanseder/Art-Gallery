import React from 'react';
import useStyles from './style';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';

const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.iconClass}
        href='/'
        label='Home'
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        className={classes.iconClass}
        href='/search'
        label='Search'
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        className={classes.iconClass}
        label='You'
        href='/profile/:id'
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
};
export default NavBar;
