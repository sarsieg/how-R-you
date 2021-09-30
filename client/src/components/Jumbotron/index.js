import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Jumbotron = () => {
    const location = useLocation();
    const history = useHistory();
    return (
        <div className="w-100 mt-auto bg-secondary p-4 Jumbotron">
            <div className="container text-center mb-5">
                {location.pathname !== '/' && (
                    <button
                        className="btn btn-dark mb-3"
                        onClick={() => history.goBack()}
                    >
                        &larr; Go Back
                    </button>
                )}
                <h4>
                    
                </h4>
            </div>
        </div>
    );
};

export default Jumbotron;