import React from 'react';
import Banner from './Banner';
import ExceptionalCare from './ExceptionalCare';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <ExceptionalCare />
        </div>
    );
};

export default Home;
