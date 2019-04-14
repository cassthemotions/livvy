import React from 'react';
import Subnav from '../../../../ui/components/subnav/subnav.js';

const links = [
    {
        label: "All Marketplace"
    },
    {
        label: "Home & Garden"
    },
    {
        label: "Housing"
    },
    {
        label: "Entertainment"
    },
    {
        label: "Clothing"
    },
    {
        label: "Family"
    },
    {
        label: "Electronics"
    },
    {
        label: "Hobbies"
    }
];

class SubnavDom extends React.Component {
    render (){
        return (
            <Subnav links={links} />
        );
    }
}

export default SubnavDom;
