/* global chrome */
import React, { Component } from "react";
import { getAntonym } from "./BackendHelpers";

export default class Antonym extends Component {
  state = {
    text: "",
    antonym: null
  };

  componentDidMount() {
    chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
    this.sendRequest();
  }

  //sends a message that this type is Antonym
  sendRequest() {
    chrome.runtime.sendMessage({ target: "background", type: "antonym" });
  }

  //if it is type antonym then wait to get the word and extract the antonyms
  async handleMessage(msg) {
    if (msg.target === "app") {
      if (msg.type === "antonym") {
        const antonym = await getAntonym(msg.body);
        this.setState({ text: msg.body, antonym: antonym });
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

//renders the text and format of antonym
  render() {
    return (
      <div className="container main-def">
        <h2 className="Montserrat">{this.state.text}</h2>
        {this.state.antonym !== null && (
          <div>
            <h3 className="Montserrat">Antonym</h3>
            {this.isEmpty(this.state.antonym.antonyms)===true ? <h4 className="Montserrat">There are no antonym suggestions for this text</h4>:<div>
            {this.state.antonym.antonyms.map(info => (
              <div>
                <hr />
                <p className="Montserrat">{JSON.stringify(info)}</p>
              </div>
                ))}
                </div>
          }
          </div>
        )}
        
      </div>
    );
  }
}
