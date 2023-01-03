import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary text-white font-bold bg-gradient-to-l from-primary to-secondary">
                            {children}
                        </button>
    );
};

export default PrimaryButton;