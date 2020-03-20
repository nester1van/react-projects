import React from 'react';

const RepoLanguage = ({ language }) => {
    return (
        <p>
            <strong>language: </strong>
            {language ? language : ' - '}
        </p>
    )
};

export default RepoLanguage;