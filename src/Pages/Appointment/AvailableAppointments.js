import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ selectedDate }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(selectedDate, 'PP');

    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [formattedDate]);

    return (
        <div>
            <h3 className="text-xl text-secondary text-center">
                Available Services on {format(selectedDate, 'PP')}
            </h3>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20 lg:p-0 p-4">
                {services?.map((service) => (
                    <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>
                ))}
            </div>
            {treatment && (
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            )}
        </div>
    );
};

export default AvailableAppointments;
