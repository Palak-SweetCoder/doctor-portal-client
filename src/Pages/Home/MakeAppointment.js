import React from 'react';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className="bg-[url('/src/assets/images/appointment.png')] bg-cover bg-center bg-no-repeat mt-14">
            <div className='container mx-auto flex justify-center items-center'>
                <div className='lg:flex-1'>
                    <img className='mt-[-120px] hidden lg:block' src={doctor} alt="" />
                </div>
                <div className='lg:flex-1 lg:p-0 p-4'>
                    <h3 className='text-xl text-primary mb-3'>Appointment</h3>
                    <h2 className='text-4xl font-bold mb-3 text-white'>Make an Appointment Today</h2>
                    <p className='text-white mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, amet vero voluptates a voluptatibus deserunt iste dolores exercitationem natus corrupti placeat porro earum qui perspiciatis beatae quos, illum culpa ipsa consectetur praesentium quis? Ab quasi deserunt repellat, voluptate nesciunt error ut eveniet nisi tempore vitae vel, optio sapiente atque.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;