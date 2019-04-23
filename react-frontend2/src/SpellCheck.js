/* global chrome */
import React, { Component } from "react";
import { getspellCheck } from "./BackendHelpers";

export default class spellCheck extends Component {
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
    var correctedWords = [];
    if (this.state.spellcheck !== null) {
      for (var key in this.state.spellcheck.corrections) {
        if (this.state.spellcheck.corrections.hasOwnProperty(key)) {
          correctedWords.push(key);
          
        }
      }
    } else {
      console.log("null else has been hit ");
    }
    return (
      <div className="container main-def">
        <h2 className="Montserrat">{this.state.text}</h2>
        {this.state.spellcheck !== null && (
          <div>
            <h3 className="Montserrat">spellCheck</h3>
            <div>
              <hr />
              {correctedWords.map(info => 
                <div>
                  <h4 className="Montserrat">{info}</h4>
                  <hr/>
                  <p>Corrections: </p>
                {this.state.spellcheck.corrections[info].map(
                  correctionOutput => 
                    <div>
                      {console.log(correctionOutput)}
                      
                      <p className="Montserrat">{String(correctionOutput)}</p>
                    </div>
                  
                )}
                </div>
              )}
              {/* <p className="Montserrat">{JSON.stringify(this.state.spellcheck.corrections)}</p> */}
            </div>
          </div>
        )}
      </div>
    );
  }
}
