import React from 'react';
import { withRouter } from 'react-router';
import { subscribe } from 'react-contextual';
import Logo from '../Logo';
import AccountBadge from "../AccountBadge";
import styles from './styles.js';

const TopNav = (props) => {

  return (
    <div style={styles.container}>
        <Logo />
        <AccountBadge history={props.history} />
    </div>
  );
}

export default subscribe()(withRouter(TopNav));
