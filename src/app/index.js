import React from 'react';
import { subscribe } from 'react-contextual';

import 'semantic-ui-css/semantic.css';

import TopNav from './topNav';
import SideNav from '../ui/components/Sidebar/Sidebar';
import styles from './app.module.scss';

import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);

const App = (props) => {


  return (
    <div className={styles.container}>
      <SideNav />

      <div className={styles.main}>
        <TopNav />

        <div className={styles.children}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default subscribe()(withAuthenticator(App));
