import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const history = useHistory();
    return (
        <footer className="w-100 mt-auto  p-3">
            <div className="container text-center">
                {location.pathname !== '/' && (
                    <button
                        className="btn btn-dark mb-3"
                        onClick={() => history.goBack()}
                    >
                        &larr; Go Back
                    </button>
                )}
                <h4>
                    Made By{' '}
                    <span
                        className="emoji"
                        role="img"
                        aria-label="heart"
                        aria-hidden="false"
                    >
                        
                    </span>{' '}
                    <a style={{color: 'black'}}href="https://www.github.com/sarsieg" id="please">Sarah Siegel</a>, <a href="https://www.github.com/scoven2" id="please">Scott Siegel</a>, and <a href="https://www.github.com/StevegSiegel" id="please">Steve Siegel</a>
                </h4>
                <h6>
                    <a href="https://www.google.com/search?q=volunteer+at+the+animal+shelter+near+me" id="footer">Help yourself and someone else!</a></h6>
            </div>
        </footer>
    );
};

export default Footer;