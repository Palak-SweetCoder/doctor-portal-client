import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handleBooking = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id, name, slot);
        //-----creating patient booking info to sent it to the backend-----
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value,
        };
        //TO CLOSE THE MODAL
        setTreatment(null);
    };

    return (
        <div>
            <input
                type="checkbox"
                id="booking-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="font-bold text-lg text-secondary mb-5">
                        Booking for: {name}
                    </h3>
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-3 justify-items-center"
                    >
                        <input
                            type="text"
                            defaultValue={format(selectedDate, 'PP')}
                            disabled
                            className="input input-bordered w-full max-w-xs"
                        />
                        <select
                            name="slot"
                            className="select select-bordered w-full max-w-xs"
                        >
                            {slots.map((slot, index) => (
                                <option key={index} defaultValue={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            name="name"
                            disabled
                            defaultValue={user?.displayName}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="email"
                            name="email"
                            disabled
                            defaultValue={user?.email}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-secondary w-full max-w-xs"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
