import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
import UserCard from './UserCard';
import Pagination from '../pagination/Pagination';

const UsersCollection = ({ users }) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [users]);

    const numUsers = users.length;
    const usersOnPage = 5;
    const numPages = Math.ceil(numUsers/usersOnPage);

    const handleChange = (val) => {
        setCurrentPage(val);
    } 
    return (
        <>  
            <Pagination min={1} max={numPages} value={currentPage} onChange={handleChange}/>
            {users.slice((currentPage - 1) * usersOnPage, 
                    currentPage * usersOnPage)
                .map(user => 
                <UserCard key={user.login} user={user}/>
            )}
        </>

    )
};

export default UsersCollection;
// const mapStateToProps = (state) => ({
//     followers: state.followers.data
// })

// export default connect(mapStateToProps)(UserCollection);