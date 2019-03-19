/* global chrome */
import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import Data from "./Data";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }
}

export default App;
