import React from 'react';
import { connect } from 'react-redux';

const DogImages = ({ urlPicts }) => {
    return (
        <div className="clearfix">
            {urlPicts.map(pict => {
                return  <div className='imageGallery' key={pict}>
                            <img src={pict} alt='dog' />
                        </div>
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    urlPicts: state.dogPicts.urlPicts
});

export default connect(mapStateToProps)(DogImages);