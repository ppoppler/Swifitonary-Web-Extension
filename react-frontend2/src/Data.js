/* global chrome */
import React, { Component } from "react";
import { getDefinition } from "./BackendHelpers";

export default class Data extends Component {
  state = {
    text: "hello",
    definition: null
  };

  componentDidMount() {
    chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
    this.sendRequest();
  }

  sendRequest() {
    chrome.runtime.sendMessage({ target: "background", type: "message" });
  }

  async handleMessage(msg) {
    if (msg.target === "app") {
      if (msg.type === "setMessage") {
        const definition = await getDefinition(msg.body);
        console.log(definition);
        this.setState({ text: msg.body, definition: definition });
      }
    }
  }

  render() {
    chrome.runtime.onMessage.removeListener(this.handleMessage.bind(this));
    return (
      <div className="container main-def">
        <h2 className="Montserrat">{this.state.text}</h2>
        {this.state.definition !== null &&
          <div>
            <h3 className="Montserrat">{this.state.definition.pronunciation.all!==null ? this.state.definition.pronunciation.all : this.state.definition.pronunciation}</h3>
            <h3 className="Montserrat">Defintions</h3>
            {
              this.state.definition.results.map((info) =>
                <div>
                  <hr />
                  <p className="Montserrat">{info.partOfSpeech}</p>
                  <p className="Montserrat">{info.definition}</p>
                </div>
              )}
            {/* <div className="Montserrat">{this.state.definition.results[0].definition}</div> */}
          </div>
        }
      </div>
    );
  }
}
