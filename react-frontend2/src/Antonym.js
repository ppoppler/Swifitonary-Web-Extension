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

  sendRequest() {
    chrome.runtime.sendMessage({ target: "background", type: "antonym" });
  }

  async handleMessage(msg) {
    if (msg.target === "app") {
      if (msg.type === "antonym") {
        const antonym = await getAntonym(msg.body);
        this.setState({ text: msg.body, antonym: antonym });
      }
    }
  }

  render() {
    return (
      <div className="container main-def">
        <h2 className="Montserrat">{this.state.text}</h2>
        {this.state.antonym !== null && (
          <div>
            <h3 className="Montserrat">Antonym</h3>
            {this.state.antonym.antonyms.map(info => (
              <div>
                <hr />
                <p className="Montserrat">{JSON.stringify(info)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
