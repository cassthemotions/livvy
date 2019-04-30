import React from 'react';
import Subnav from '../../../../components/Subnav';

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

const SubnavDom = () => {
    return (
        <Subnav links={links} />
    );
}

export default SubnavDom;
