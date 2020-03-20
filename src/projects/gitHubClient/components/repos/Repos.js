import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReposCard from './ReposCard';
import Pagination from '../pagination/Pagination';

const Repos = ({ repos }) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [repos]);

    const numRepos = repos.length;
    const reposOnPage = 5;
    const numPages = Math.ceil(numRepos/reposOnPage);

    const handleChange = (val) => {
        setCurrentPage(val);
    } 
    return (
        <>  
            <Pagination min={1} max={numPages} value={currentPage} onChange={handleChange}/>
            {repos.slice((currentPage - 1) * reposOnPage, 
                    currentPage * reposOnPage)
                .map(repos => 
                <ReposCard key={repos.login} repos={repos}/>
            )}
        </>

    )
};

const mapStateToProps = (state) => ({
    repos: state.repos.data
})

export default connect(mapStateToProps)(Repos);