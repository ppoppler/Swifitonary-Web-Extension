import React, { Component } from "react";
import logo from "./logo.svg";
import ButtonSwitch from "./components/ButtonSwitch";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SwiftionaryText from "./images/Swiftionary Text.png";
import ExtensionTab from "./components/ExtensionTab";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <img className="swift-logo" src={SwiftionaryText} alt="Swiftionary"/>
          <div className="container">
            <ExtensionTab/>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
