/* global chrome */
import React, { Component } from "react";
import { getSynonym } from "./BackendHelpers";

export default class Synonym extends Component {
  state = {
    text: "",
    synonym: null
  };

  componentDidMount() {
    chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
    this.sendRequest();
  }

  sendRequest() {
    chrome.runtime.sendMessage({ target: "background", type: "synonym" });
  }

  async handleMessage(msg) {
    if (msg.target === "app") {
      if (msg.type === "synonym") {
        const synonym = await getSynonym(msg.body);
        console.log(synonym);
        this.setState({ text: msg.body, synonym: synonym });
      }
    }
  }

  render() {
    return (
      <div className="container main-def">
        <h2 className="Montserrat">{this.state.text}</h2>
        {this.state.synonym !== null && (
          <div>
            <h3 className="Montserrat">Synonym</h3>
            {this.state.synonym.synonyms ? this.state.synonym.synonyms.map(info => (
              <div>
                <hr />
                <p className="Montserrat">{JSON.stringify(info)}</p>
              </div>
            )) : null}
          </div>
        )}
      </div>
    );
  }
}
