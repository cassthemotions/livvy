import React from 'react';

const Subnav = (props) => {
        return (
            <ul>
                {
                    props.links.map(
                        (link, index) =>
                            <li key={index}>
                                {link.label}
                            </li>
                    )
                }
            </ul>
        );
}

export default Subnav;
