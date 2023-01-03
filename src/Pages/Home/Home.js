import React from 'react';
import Banner from './Banner';
import ExceptionalCare from './ExceptionalCare';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <ExceptionalCare />
            <MakeAppointment />
        </div>
    );
};

export default Home;
