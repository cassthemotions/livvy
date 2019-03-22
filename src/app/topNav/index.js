/**
 * This component is the top nav of the UI which contains a toggle
 * button to slide the side nav, see notifications, and view account
 * details such as profile information, security, sign out, etc.
 */

import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Icon, Dropdown } from 'semantic-ui-react';
import { subscribe } from 'react-contextual';
import { Auth } from 'aws-amplify';
import styles from './topNav.module.scss';

const TopNav = (props) => {

  const [username, setUsername] = useState('');

  // Get the username on load
  useEffect(() => {
    (async () => {
      const user = await Auth.currentAuthenticatedUser();
      if (user) setUsername(user.username);
    })();
  }, ['']);

  return (
    <div className={styles.container}>
      <Icon
        name="bars"
        size="big"
        className={styles.menu}
        onClick={props.toggleSideNav}
      />

      <div className={styles.accountContainer}>
        <Dropdown
          className={styles.userDropdown}
          inline
          icon={null}
          pointing="top right"
          trigger={
            <span className={styles.avatar}>
              <Icon
                circular
                name="user"
                color="grey"
              />
              {username}
            </span>
          }
          options={[
            { text: 'Account', value: 'Account', onClick: () => props.history.push('/account') },
            { text: 'Sign Out', value: 'Sign Out', onClick: () => Auth.signOut() }
          ]}
        />
      </div>
    </div>
  );
}

export default subscribe()(withRouter(TopNav));
