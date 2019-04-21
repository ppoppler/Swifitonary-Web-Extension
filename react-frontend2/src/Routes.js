import {BrowserRouter, Route} from 'react-router-dom';
import React, {Component} from 'react';
import Definition from './Definition';
import Antonym from './Antonym';
import Synonym from './Synonym';
import Urban from './Urban';
import SpellCheck from './SpellCheck';


const Router = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" render={() => <Definition />}></Route>
        <Route path="/" render={() => <Synonym />}></Route>
        <Route path="/" render={() => <SpellCheck />}></Route>
        {/* <Route path="/" render={() => <Urban />}></Route> */}
        </BrowserRouter>
    )
}

export default Router;

