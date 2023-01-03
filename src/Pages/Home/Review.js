import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{review.review}</p>
                    <div className='flex items-center mt-4'>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary mr-5 ring-offset-2">
                                <img src={review.img} alt="" />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold'>{review.name}</h4>
                            <p>{review.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;