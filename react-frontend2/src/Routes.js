import {BrowserRouter, Route} from 'react-router-dom';
import React, {Component} from 'react';
import Definition from './Definition';


const Router = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" render={() => <Definition />}></Route>
        <Route path="/synonym"></Route>
        </BrowserRouter>
    )
}

export default Router;