import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';
import Definition from './Definition';
import Antonym from './Antonym';
import Synonym from './Synonym';
import Urban from './Urban';
import SpellCheck from './SpellCheck';
import Wiki from './Wiki';


const Router = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" render={() => <Definition />}></Route>
        <Route path="/" render={() => <Synonym />}></Route>
        <Route path="/" render={() => <Antonym />}></Route>
        <Route path="/" render={() => <SpellCheck />}></Route>
        <Route path="/" render={() => <Urban />}></Route>
        <Route path="/" render={() => <Wiki />}></Route>
        </BrowserRouter>
    )
}

export default Router;

