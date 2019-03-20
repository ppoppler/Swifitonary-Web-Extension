/* global chrome */
import React, { Component } from "react";
import { getSynonym } from "./BackendHelpers";


export default class Definition extends Component {
    state = {
      text: "",
      synonym: null
    };


    render(){
        return(
            <div>
                <p>Hello</p>
            </div>
        )
    }
}