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
        console.log(antonym);
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
            {console.log(this.state.antonym.pronunciation===undefined)}
            {this.state.antonym.pronunciation !== undefined && 
              <h3 className="Montserrat">
                {this.state.antonym.pronunciation.all !== null
                  ? this.state.antonym.pronunciation.all
                  : this.state.antonym.pronunciation}
              </h3>
            }
            <h3 className="Montserrat">Antonym</h3>
            {this.state.antonym.results.map(info => (
              <div>
                <hr />
                <p className="Montserrat">{info.partOfSpeech}</p>
                <p className="Montserrat">{info.antonym}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
