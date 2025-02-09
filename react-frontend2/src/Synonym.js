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

  //sends a message that this type is Synonym 
  sendRequest() {
    chrome.runtime.sendMessage({ target: "background", type: "synonym" });
  }

  //if it is type synonym then wait to get the word and extract the synonyms
  async handleMessage(msg) {
    if (msg.target === "app") {
      if (msg.type === "synonym") {
        const synonym = await getSynonym(msg.body);
        this.setState({ text: msg.body, synonym: synonym });
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

//renders the text and format of synonym
  render() {
    return (
      <div className="container main-def">
        <h2 className="Montserrat">{this.state.text}</h2>
        {this.state.synonym !== null && (
          <div>
            <h3 className="Montserrat">Synonym</h3>
            {this.isEmpty(this.state.synonym.synonyms)===true ? <h4 className="Montserrat">There are no synonym suggestions for this text</h4>:<div>
            {this.state.synonym.synonyms.map(info => (
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
