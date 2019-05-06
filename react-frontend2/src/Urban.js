/* global chrome */
import React, { Component } from "react";
import { getUrban } from "./BackendHelpers";

export default class Urban extends Component {
  state = {
    text: "",
    urban: null
  };

  componentDidMount() {
    chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
    this.sendRequest();
  }

  //sends a message that this is Urban
  sendRequest() {
    chrome.runtime.sendMessage({ target: "background", type: "urban" });
  }

  //if it is type urban then wait to get the word and extract the urban definitions and examples
  async handleMessage(msg) {
    if (msg.target === "app") {
      if (msg.type === "urban") {
        const urban = await getUrban(msg.body);
        this.setState({ text: msg.body, urban: urban });
      }
    }
  }
  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
  render() {

    //renders the text and format of urban slang
    return (
      <div className="container main-urban">
        <h2 className="Montserrat">{this.state.text}</h2>
        {this.state.urban !== null &&(
          <div>
            <p align="left">
            <h3 className="Montserrat">Slang</h3>
            {this.isEmpty(this.state.urban.list)===true ? <h4 className="Montserrat">There are no slang suggestions for this text</h4>:<div>
            {this.state.urban.list.map(info => (
              <div>
                <hr />
                <h4 className="Montserrat">Definition</h4>
                <p className="Montserrat">{info.definition}</p>
                <h4 className="Montserrat">Example</h4>
                <p className="Montserrat">{info.example}</p>
              </div>
            ))}
          </div>
            }
            </p></div>
        )}
      </div>
    );
  }
}
