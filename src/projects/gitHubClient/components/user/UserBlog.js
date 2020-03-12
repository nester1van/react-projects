import React from 'react';
import { connect } from 'react-redux';

const UserBlog = ({ blog }) => {
    return (
        <p>blog : {blog ? 
            <a  href={blog} 
                target='_blank' 
                rel='noopener noreferrer'>{blog}</a>
            : ' - '}
        </p>
    )
};

const mapStateToProps = (state) => ({
    blog: state.user.data.blog
})

export default connect(mapStateToProps)(UserBlog);