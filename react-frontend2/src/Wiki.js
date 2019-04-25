/* global chrome */
import React, { Component } from "react";
import { getWiki } from "./BackendHelpers";

export default class Wiki extends Component {
  state = {
    text: "",
    wiki: null
  };

  componentDidMount() {
    chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
    this.sendRequest();
  }

  sendRequest() {
    chrome.runtime.sendMessage({ target: "background", type: "wiki" });
  }

  async handleMessage(msg) {
    if (msg.target === "app") {
      if (msg.type === "wiki") {
        const wiki = getWiki(msg.body);
        this.setState({ text: msg.body, wiki: wiki });
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
    return ( 
      <div className="container main-def">
        <h2 className="Montserrat">{this.state.text}</h2>
        {this.state.wiki !== null && (
          <div>
            <h3 className="Montserrat">Wiki</h3>
            {this.isEmpty(this.state.wiki.extract)===true ? <h4 className="Montserrat">There are no wiki suggestions for this text</h4>:<div>

            <p className="Montserrat">{JSON.stringify(this.state.wiki.extract)}</p>
          </div>
            
            }
            </div>
        )}
      </div>
    );
  }
}
