import React from 'react';
import { withRouter } from 'react-router';
import { Icon } from 'semantic-ui-react';
import { subscribe } from 'react-contextual';
import AccountBadge from "../../ui/components/AccountBadge/AccountBadge";
import styles from './topNav.module.scss';

const TopNav = (props) => {

  return (
    <div className={styles.container}>
      <Icon
        name="bars"
        size="big"
        className={styles.menu}
        onClick={props.toggleSideNav}
      />
      <AccountBadge history={props.history} />
    </div>
  );
}

export default subscribe()(withRouter(TopNav));
