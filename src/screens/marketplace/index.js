import React from "react";
import styles from "./styles";
import { subscribe } from "react-contextual";
import ContentSideBar from "../../ui/layouts/ContentSidebar/ContentSideBar"
// import Subnav from "./components/Subnav";
import Post from "./components/Post";

const subheader = () => {
    return (
        <h1>Marketplace</h1>
    );
}

// const sidebar = <Subnav />;
const content = <Post />;
const subfooter = "This is my subfooter";

const Marketplace = props => {
    return (
        <ContentSideBar
            styles={styles}
            subheader={subheader()}
            // sidebar={sidebar}
            content={content}
            subfooter={subfooter}
        />
    );
}

export default subscribe()(Marketplace);
