import React from 'react';
import { Route } from 'react-router-dom';
import Random from '../WordData/Random';

function Home() {

    return (
        <div>
                <Route>
                    <Random />
                </Route>
        </div>
    );
};

export default Home;