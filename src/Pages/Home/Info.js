import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 container mx-auto p-4 lg:p-16'>
            <InfoCard cardTitle="Opening Hours" cardDes="Lorem Ipsum is simply dummy text of the pri" bgClass="bg-gradient-to-l from-primary to-secondary" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Locations" cardDes="Brooklyn, NY 10036, United States" bgClass="bg-accent" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" cardDes="+000 123 456789" bgClass="bg-gradient-to-l from-primary to-secondary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;