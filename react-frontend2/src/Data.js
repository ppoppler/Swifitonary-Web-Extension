/* global chrome */
import React, { Component } from "react";

export default class Data extends Component {
  state = {
    text: "hello",
    received: false
  };

  componentDidMount() {
    chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
    this.setState({ received: false });
  }

  componentWillUnmount() {
    chrome.runtime.onMessage.removeListener(this.handleMessage.bind(this));
  }

  sendRequest() {
    chrome.runtime.sendMessage({ target: "background", type: "message" });
  }

  handleMessage(msg) {
    console.log(msg);
    if (msg.target === "app") {
      if (msg.type === "setMessage") {
        if (this.state.received === false)
          this.setState({ text: msg.body, received: true });
      }
    }
  }

  render() {
    this.sendRequest();
    chrome.runtime.onMessage.removeListener(this.handleMessage.bind(this));
    return (
      <div className="App">
        <h1 id="word" className="App-title">
          {this.state.domain}
        </h1>
        <div>{this.state.text}</div>
      </div>
    );
  }
}
