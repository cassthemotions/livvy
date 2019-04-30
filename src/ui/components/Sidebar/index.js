import React from 'react';
import { subscribe } from 'react-contextual';
import Navigation from "../Navigation";
import Copyright from '../Copyright';
import styles from './styles';

const Sidebar = props => {
  return (
    <div style={styles.container}>
        <Navigation />
        <Copyright />
    </div>
  );
}

export default subscribe()(Sidebar);
