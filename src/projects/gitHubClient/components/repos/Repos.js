import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import RepoCard from './RepoCard';
import Pagination from '../pagination/Pagination';
import './repos.css';

const Repos = ({ repos }) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [repos]);

    const numRepos = repos.length;
    const reposOnPage = 6;
    const numPages = Math.ceil(numRepos/reposOnPage);

    const handleChange = (val) => {
        setCurrentPage(val);
    } 
    return (
        <>  
            <div className='pagination'>
                <Pagination 
                min={1} max={numPages} value={currentPage} onChange={handleChange}/>
            </div>
            <h2 className ='title'>Repositories</h2>
            <div className = 'flexContainer'>
                {repos.slice((currentPage - 1) * reposOnPage, 
                    currentPage * reposOnPage)
                    .map(repo => 
                    <RepoCard key={repo.full_name} repo={repo}/>
                )}
            </div>
        
        </>

    )
};

const mapStateToProps = (state) => ({
    repos: state.repos.data
})

export default connect(mapStateToProps)(Repos);