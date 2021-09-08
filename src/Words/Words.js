import React from 'react';
import { Route } from 'react-router-dom';
import "./Words.css";
import InputCheck from './InputCheck';
import Random from '../WordData/Random';

function Words() {

    return (
        <div>
                <Route>
                    <Random />
                    <InputCheck />
                </Route>
        </div>
    );
};

export default Words;