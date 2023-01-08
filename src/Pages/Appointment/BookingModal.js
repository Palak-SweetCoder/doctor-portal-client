import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(selectedDate, 'PP');

    const handleBooking = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
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
        //--------send the booking data to the server----------
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`);
                } else {
                    toast.error(
                        `Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`
                    );
                }
                //TO CLOSE THE MODAL
                setTreatment(null);
            });
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
