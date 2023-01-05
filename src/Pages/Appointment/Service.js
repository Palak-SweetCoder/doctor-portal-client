import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-2xl font-semibold text-secondary text-center">{name}</h2>
                    <p>
                        {
                            slots.length
                                ? <span>{slots[0]}</span>
                                : <span className='text-red-500'>Try another date</span>
                        }
                    </p>
                    <p className='uppercase'>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} available</p>
                    <div className="card-actions justify-center">
                        <label
                            htmlFor="booking-modal"
                            onClick={() => setTreatment(service)}
                            disabled={slots.length === 0}
                            className="btn btn-secondary text-white uppercase bg-gradient-to-l from-primary to-secondary">Book Appointment
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;