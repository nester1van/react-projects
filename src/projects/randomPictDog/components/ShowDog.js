import React from 'react';
import ButtonGetDog from './ButtonGetDog';
import PictDog from './PictDog';
import FetchingProcess from './FetchingProcess';
import './showdog.css';

const ShowDog = () => {
    return (
            <div className="wrapper">
                <div className="showDog">
                    <div className="buttonGetDog">
                        <ButtonGetDog/>
                    </div>
                    <div className="fetchingProcess">
                        <FetchingProcess/>
                    </div>
                    <PictDog/>
                </div>
            </div>    
    )
}

export default ShowDog;