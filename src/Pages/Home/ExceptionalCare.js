import React from 'react';
import treatment from '../../assets/images/treatment.png';

const ExceptionalCare = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:p-12'>
                        <img src={treatment} className="sm:max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="lg:p-12">
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <button className="btn btn-primary bg-gradient-to-l from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;