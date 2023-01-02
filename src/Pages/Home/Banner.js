import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen  bg-hero-pattern bg-cover bg-center bg-no-repeat">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="lg:p-20">
                        <img
                            src={chair}
                            className="sm:max-w-sm rounded-lg shadow-2xl"
                            alt=""
                        />
                    </div>
                    <div className="lg:p-20">
                        <h1 className="text-5xl font-bold">
                            Your New Smile Starts Here
                        </h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi quasi. In deleniti
                            eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-primary to-secondary">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
