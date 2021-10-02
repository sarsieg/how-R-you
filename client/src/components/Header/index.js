import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
            <div className="example"></div>
            
            <div className="container flex-row justify-space-between-lg justify-center align-center">

                <div>
                    <Link className="text-light" to="/">
                        <h1 className="m-0">how[R]you</h1>
                    </Link>
                    <p className="m-0">lets talk this shit out</p>
                </div>
                <div>
                    {Auth.loggedIn() ? (
                        <>
                            <Link className="btn btn-md btn-info m-2" to="/">                Home
                            </Link>
                            <Link className="btn btn-md btn-info m-2" >                Groups
                            </Link>
                            <Link className="btn btn-md btn-info m-2" >                Events
                            </Link>
                            <Link className="btn btn-d btn-info m-2" to="/me">
                                Profile
                            </Link>
                            <button className="btn btn-md btn-light m-2" onClick={logout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link className="btn btn-md btn-info m-2" to="/">                Home
                            </Link>
                            <Link className="btn btn-md btn-info m-2" to="/login">
                                Login
                            </Link>
                            <Link className="btn btn-md btn-light m-2" to="/signup">
                                Signup
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;