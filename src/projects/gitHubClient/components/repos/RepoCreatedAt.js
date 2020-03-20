import React from 'react';
import formatDate from '../../js/formatDate';

const RepoCreatedAt = ({ createdAt }) => {
    const date = new Date(createdAt);

    return (
        <>
            <span>
                <strong>created at: </strong>
                {formatDate(date)}
            </span>
        </>
    )
};

export default RepoCreatedAt;