import React from 'react';
import { connect } from 'react-redux';

const PictDog = ({urlPict}) => {
    return (
        <img src={urlPict} alt="dog"/>
    )
}

const mapStateToProps = (state) => ({
    urlPict: state.urlPict
})

export default connect(mapStateToProps)(PictDog);