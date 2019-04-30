/**
 * This component is the main layout file which wraps the entire
 * application. You can call things here if you want them to load
 * when the application first loads.
 */

import React from 'react';
import styles from './maintenance.module.scss';
import { subscribe } from 'react-contextual';


const Maintenance = props => {


  return (
    <div className={styles.container}>
      screens/maintenace
    </div>
  );
}

export default subscribe()(Maintenance);
