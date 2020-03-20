import React from 'react';
import formatDate from '../../js/formatDate';

const RepoUpdatedAt = ({ updatedAt }) => {
    const date = new Date(updatedAt);

    return (
    <span>
        <strong>updated at: </strong>
        {formatDate(date)}
    </span>
    )
};

export default RepoUpdatedAt;