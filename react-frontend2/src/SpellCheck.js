/* global chrome */
import React, { Component } from "react";
import { getspellCheck } from "./BackendHelpers";

export default class spellCheck extends Component
{
  state = {
    text: "",
    spellcheck: null
  };

  componentDidMount() {
    chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
    this.sendRequest();
  }

  sendRequest() {
    chrome.runtime.sendMessage({ target: "background", type: "spellcheck" });
  }

  async handleMessage(msg) {
    if (msg.target === "app") {
      if (msg.type === "spellcheck") {
        const spellcheck = await getspellCheck(msg.body);
        console.log(spellcheck);
        this.setState({ text: msg.body, spellcheck: spellcheck });
      }
    }
  }

  render() {
    return (
      <div className="container main-def">
        <h2 className="Montserrat">{this.state.text}</h2>
        {this.state.spellcheck !== null && (
          <div>
            <h3 className="Montserrat">spellCheck</h3>
              <div>
                <hr />
                <p className="Montserrat">{JSON.stringify(this.state.spellcheck.suggestion)}</p>
              </div>
            {/* {this.state.spellcheck.corrections.map(info => (
              <div>
                <hr />
                <p className="Montserrat">{JSON.stringify(info)}</p>
              </div>
            ))} */}
          </div>
        )}
      </div>
    );
  }
}
