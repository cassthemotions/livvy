import React from "react";
import styles from "./styles";

const ContentSideBar = props => {
    return (
        <div
            style={
                {
                    ...styles.container,
                    ...props.styles.container,
                }
            }
        >
            {props.subheader &&
                <div
                    className="subheader"
                    style={styles.subheader}
                >
                    {props.subheader}
                </div>
            }
            <div
                className="body"
                style={
                    {
                        ...styles.body,
                        ...props.styles.body,
                    }
                }
            >
                {props.sidebar &&
                    <div
                        className="sidebar"
                        style={
                            {
                                ...styles.sidebar,
                                ...props.styles.sidebar,
                            }
                        }
                    >
                        {props.sidebar}
                    </div>
                }
                <div
                    className="content"
                    style={
                        {
                            ...styles.content,
                            ...props.styles.content,
                        }
                    }
                >
                    {props.content}
                </div>
            </div>
            {props.subfooter &&
                <div
                    className="subfooter"
                    style={
                        {
                            ...styles.subfooter,
                            ...props.styles.subfooter,
                        }
                    }
                >
                    {props.subfooter}
                </div>
            }
        </div>
    );
}

export default ContentSideBar;
