import React from 'react';
import ButtonGetDog from './ButtonGetDog';
import PictDog from './PictDog';
import FetchingProcess from './FetchingProcess';
import './showdog.css';

const ShowDog = () => {
    return (
            <div className="clearfix">
                <div className="showDog">
                    <ButtonGetDog/>
                    <FetchingProcess/>
                    <PictDog/>
                </div>
            </div>    
    )
}

export default ShowDog;