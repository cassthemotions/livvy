import React from 'react';
import { subscribe } from 'react-contextual';
import 'semantic-ui-css/semantic.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import styles from './styles.js';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import aws_exports from '../../../aws-exports';

Amplify.configure(aws_exports);

const App = (props) => {
  return (
    <div>
        <Header />
        <div style={styles.content}>
            <Sidebar />
            {props.children}
      </div>
    </div>
  );
}

export default subscribe()(withAuthenticator(App));
