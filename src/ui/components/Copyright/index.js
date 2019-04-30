import React from 'react';
import styles from './styles.js';

const Copyright = () => {
  return (
        <div style={styles.container}>
            <a
                href="https://www.livvy.io/privacy"
                target="_blank"
                rel="noopener noreferrer"
            >
                Privacy
            </a>
            <div>
                <a
                    href="https://www.livvy.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Powered by Livvy
                </a>
          </div>
        </div>
  );
}

export default Copyright;
