import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import GetAllBreed from './components/GetAllBreed';
import SelectorBreed from './components/SelectorBreed';
import SelectorNumPicts from './components/SelectorNumPicts';
import ButtonGetPicts from './components/ButtonGetPicts';
import DogImages from './components/DogImages';
import Form from 'react-bootstrap/Form';
import './index.css';

const DogPictsByBreed = () => {
    return (
        <Provider store={store}>
                <GetAllBreed>
                    <div className="formGetDogs wrapper">
                        <Form inline>
                            <div className="wrapper">
                                <SelectorBreed/>
                                <SelectorNumPicts maxNumber={5}/>
                                <ButtonGetPicts/>
                            </div>
                        </Form>
                    </div>
                    <div className="wrapper">
                        <DogImages/>
                    </div>
                    
                </GetAllBreed>
        </Provider>
    );
};

export default DogPictsByBreed;