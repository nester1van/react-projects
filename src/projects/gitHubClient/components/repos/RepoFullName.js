import React from 'react';

const ReposFullName = ({ fullName }) => {
    return (
        <>
            <p className='fullName'>
                <i className="fa fa-book" aria-hidden="true"></i>
                <strong>{} {fullName}</strong>
            </p>
        </>
    )
};

export default ReposFullName;