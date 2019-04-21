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

  sendRequest() {
    chrome.runtime.sendMessage({ target: "background", type: "urban" });
  }

  async handleMessage(msg) {
    if (msg.target === "app") {
      if (msg.type === "urban") {
        const urban = await getUrban(msg.body);
        console.log(urban);
        this.setState({ text: msg.body, urban: urban });
      }
    }
  }
 
  render() {
    return (
      <div className="container main-urban">
        <h2 className="Montserrat">{this.state.text}</h2>
        {this.state.urban !== null (
          <div>
            <h3 className="Montserrat">Urban</h3>
            {this.state.urban.list.map(info => (
              <div>
                <hr />
                <p className="Montserrat">{"Definition: " + info.definition}</p>
                <p className="Montserrat">{"Example: " + info.example}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
