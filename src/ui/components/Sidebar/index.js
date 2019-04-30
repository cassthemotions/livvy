import React from 'react';
import { subscribe } from 'react-contextual';
import Navigation from "../Navigation/Navigation";
import Copyright from '../Copyright/Copyright';
import Logo from '../Logo/Logo';

import styles from './styles';

const Sidebar = props => {
  return (
    <div style={styles.container}>
        <Logo />
        <Navigation />
        <Copyright />
    </div>
  );
}

export default subscribe()(Sidebar);
