import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtList = ({
    thoughts,
    title,
    showTitle = true,
    showUsername = true,
}) => {
    if (!thoughts.length) {
        return <h3>No Thoughts Yet</h3>
    }

    return (
        <div>
            {showTitle && <h3>{title}</h3>}
            {thoughts &&
                thoughts.map((thought) => (
                    <div key={thought._id} className="card mb-3">
                        <h4 className="card-header bg-primary text-light p-2 m-0" id="bootstrap-overrides">
                            {showUsername ? (
                                <Link
                                    className="text-light text-header" style={{ fontSize: '1.7rem' }}
                                    to={`/profiles/${thought.thoughtAuthor}`}
                                >
                                    {thought.thoughtAuthor} <br />
                                    <span style={{ fontSize: '.6rem' }}>
                                        Posted on {thought.createdAt}
                                    </span>
                                </Link>
                            ) : (
                                <>
                                    <span style={{ fontSize: '.75rem' }}>
                                        Posted on {thought.createdAt}
                                    </span>
                                </>
                            )}
                        </h4>
                        <div className="card-body bg-light p-2">
                            <p>{thought.thoughtText}</p>
                        </div>
                        <Link
                            className="btn btn-primary btn-block btn-squared" style={{
                                borderBottomLeftRadius: '.75rem',
                                borderBottomRightRadius: '.75rem',
                                borderTopRightRadius: '0',
                                borderTopLeftRadius: '0',
                            }}
                            to={`/thoughts/${thought._id}`}
                        >

                      

                            Check Chit Chat

                        </Link>
                    </div>
                ))}
        </div>
    );
};

export default ThoughtList;