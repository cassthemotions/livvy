import React from 'react';
import styles from './styles.js';
import { subscribe } from 'react-contextual';
import Subnav from './components/subnav/subnav.js';

const Marketplace = props => {
    return (
        <div style={styles.container}>
            <div
                className="subheader"
                style={styles.subheader}
            >
                <h1>Marketplace</h1>
            </div>
            <div style={styles.layout}>
                <div
                    className="sidebar"
                    style={styles.sidebar}
                >
                    <Subnav />
                </div>
                <div
                    className="content"
                    style={styles.content}
                >
                    <ul>
                        <li>Post</li>
                        <li>Post</li>
                        <li>Post</li>
                        <li>Post</li>
                        <li>Post</li>
                        <li>Post</li>
                    </ul>
                </div>
            </div>
            <div
                className="subfooter"
                style={styles.subfooter}
            >
                Subfooter
            </div>
        </div>
    );
}

export default subscribe()(Marketplace);
