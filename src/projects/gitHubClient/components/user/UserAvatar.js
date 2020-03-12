import React from 'react';
import { connect } from 'react-redux';

const UserAvatar = ({ avatarUrl }) => {
    return (
        <div>
            <img src={avatarUrl} alt='user'/>
        </div>
    )
};

const mapDispatchToProps = (state) => ({
    avatarUrl: state.user.data.avatar_url
})

export default connect(mapDispatchToProps)(UserAvatar);
