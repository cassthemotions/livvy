import React from 'react';
import styles from "./styles.js";
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Logo = () => {
    return (
        <Link
            to="/"
            style={styles.container}
        >
            <img
                src={logo}
                alt="Livvy Logo"
                style={styles.img}
            />
        </Link>
    );
}

export default Logo;
