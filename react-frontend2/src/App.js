/* global chrome */
import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    text: "hello",
  };

  componentDidMount() {
    // chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    //   const url = new URL(tabs[0].url);
    //   const domain = url.hostname;
    //   this.setState({
    //     domain: domain
    //   });
    //   this.getHeadlines(domain);
    // });
    chrome.runtime.onMessage.addListener(this.handleMessage.bind(this)); 
  }

  componentWillUnmount(){
    chrome.runtime.onMessage.removeListener(this.handleMessage.bind(this));
  }

  sendRequest(){
    chrome.runtime.sendMessage({target:"background",type:"message"});
  }

  handleMessage(msg){
    console.log(msg);
    if(msg.target ==='app'){
      if(msg.type === 'setMessage'){
        console.log(msg.body);
        this.setState({text: msg.body});
      }
    }
  }
  

  render() {
    this.sendRequest();
    chrome.runtime.onMessage.removeListener(this.handleMessage.bind(this));
    return (
      <div className="App">
        <h1 id="word" className="App-title">{this.state.domain}</h1>
        <div>{this.state.text}</div>
        {/* {this.state.headlines.map(headline => (
          <h4
            className="link" 
            onClick={() => {
              window.open(headline.url);
            }}
          >
            {headline.title}
          </h4>
        ))} */}
      </div>
    );
  }
}

export default App;
