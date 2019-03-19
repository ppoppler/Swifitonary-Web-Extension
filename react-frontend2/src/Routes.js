import {BrowserRouter, Route} from 'react-router-dom';
import React, {Component} from 'react';
import Data from './Data';


const Router = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route path="/" render={()=><Data/>}></Route>
        </BrowserRouter>
    )
}

export default Router;