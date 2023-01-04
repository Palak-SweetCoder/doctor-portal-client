import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <div className="hero min-h-screen container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="sm:max-w-sm rounded-lg shadow-2xl lg:ml-20" alt='' />
                    <div className='lg:pr-20'>
                        <DayPicker
                            required
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p>You have selected: {format(selectedDate, 'PP')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;