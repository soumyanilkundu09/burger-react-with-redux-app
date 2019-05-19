import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.token ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        {props.token ? <NavigationItem link="/logout">Logout</NavigationItem> : <NavigationItem link="/auth">Authenticate</NavigationItem>}
    </ul>
);

export default navigationItems;