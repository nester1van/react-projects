import React from 'react';

const RepoStargazersCount = ({ stargazersCount }) => {
    return (
        <span>
            <i className="fa fa-star"/>
            {' '} {stargazersCount}
        </span>
    )
};

export default RepoStargazersCount;