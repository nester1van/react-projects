import React from 'react';

const RepoDescription = ({ description }) => {
    return (
        <>
            <p>
                <strong>description: </strong>
                {description}
                </p>
        </>
    )
};

export default RepoDescription;