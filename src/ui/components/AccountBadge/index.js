import React, { useEffect, useState } from 'react';
import { Icon, Dropdown } from 'semantic-ui-react';
import { Auth } from 'aws-amplify';
import styles from './styles.js';

const AccountBadge = (props) => {

    const [username, setUsername] = useState('');

    // Get the username on load
    useEffect(() => {
      (async () => {
        const user = await Auth.currentAuthenticatedUser();
        if (user) setUsername(user.username);
      })();
    }, ['']);

    return (
        <div style={styles.accountContainer}>
          <Dropdown
            style={styles.userDropdown}
            inline
            icon={null}
            pointing="top center"
            trigger={
              <span style={styles.avatar}>
                <Icon
                  circular
                  name="user"
                  color="grey"
                />
                {username}
              </span>
            }
            options={
                [
                    {
                        text: 'Account',
                        value: 'Account',
                        onClick: () => props.history.push('/account')
                    },
                    {
                        text: 'Sign Out',
                        value: 'Sign Out',
                        onClick: () => Auth.signOut()
                    }
                ]
            }
          />
        </div>
    )
}

export default AccountBadge;
