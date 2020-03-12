import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { getAllBreeds } from '../redux/allBreeds/actions';
import ButtonGetAllBreeds from './ButtonGetAllBreeds';

const GetAllBreeds = ({ children, allBreeds, getAllBreeds }) => {
    const { status, isFetching } = allBreeds;

    useEffect(() => {
        getAllBreeds();
    }, []);

    const processingGetAllBreads = () => {
        if (isFetching) {
            return (<p>loading...</p>)
        } else if (status === 'success') {
            return [children]
        } else {
            return (<div>
                        <p>Error</p>
                        <p><ButtonGetAllBreeds/></p>
                    </div>)
        }
    };

    return (
        <div>
            {processingGetAllBreads()}
        </div>
    );
};

const mapStateToProps = (state) => ({
    allBreeds: state.allBreeds
});

export default connect(mapStateToProps, {getAllBreeds})(GetAllBreeds);