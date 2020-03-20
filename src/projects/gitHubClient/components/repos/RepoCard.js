import React from 'react';
import RepoFullName from './RepoFullName';
import RepoDescription from './RepoDescription';
import RepoCreatedAt from './RepoCreatedAt';
import RepoUpdatedAt from './RepoUpdatedAt';
import RepoLanguage from './RepoLanguage';
import RepoStargazersCount from './RepoStargazersCount';
import RepoForksCount from './RepoForksCount';
import './repos.css';

const ReposCard = ({ repo }) => {
    console.log(repo);
    const { full_name, description, created_at, 
        updated_at, language, stargazers_count, forks_count} = repo;
    return (
            <div className="repoCard">
                <RepoFullName fullName={full_name}/>
                <RepoDescription description={description}/>
                <p>
                    <RepoCreatedAt createdAt={created_at}/>
                    {' '}
                    <RepoUpdatedAt updatedAt={updated_at}/>
                </p>
                <RepoLanguage language={language}/>
                <p>
                    <RepoStargazersCount stargazersCount={stargazers_count}/>
                        {' '}
                    <RepoForksCount forksCount={forks_count}/>
                </p>
            </div>
    )
};

export default ReposCard;