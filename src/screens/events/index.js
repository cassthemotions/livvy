import React from 'react';
import styles from './events.module.scss';
import { subscribe } from 'react-contextual';

const Events = props => {
  return (
    <div className={styles.container}>
      screens/events
    </div>
  );
}

export default subscribe()(Events);
