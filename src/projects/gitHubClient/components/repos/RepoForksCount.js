import React from 'react';

const RepoForksCount = ({ forksCount }) => {
    return (
        <span>
            <i className="fa fa-code-fork"/>
            {' '} {forksCount}
        </span>
    )
};

export default RepoForksCount;

