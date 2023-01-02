import React from 'react';

const InfoCard = ({ img, cardTitle, cardDes, bgClass }) => {
    return (
            <div className={`card lg:card-side shadow-xl ${bgClass}`}>
                <figure className='p-4'><img src={img} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>{cardDes}</p>

                </div>
            </div>
    );
};

export default InfoCard;