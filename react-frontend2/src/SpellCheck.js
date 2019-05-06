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

  //sends a message that this is type SpellCheck
  sendRequest() {
    chrome.runtime.sendMessage({ target: "background", type: "spellcheck" });
  }

  //if it is type spellcheck then wait to get the word and extract the spellcheck corrections and suggestion
  async handleMessage(msg) {
    if (msg.target === "app") {
      if (msg.type === "spellcheck") {
        const spellcheck = await getspellCheck(msg.body);
        console.log(spellcheck);
        this.setState({ text: msg.body, spellcheck: spellcheck });
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

//renders the text and format of spellcheck
  render() {

    var correctedWords = [];
    if (this.state.spellcheck !== null) {
      for (var key in this.state.spellcheck.corrections) {
        if (this.state.spellcheck.corrections.hasOwnProperty(key)) {
          correctedWords.push(key);
          
        }
      }
    }
    return (
      <div className="container main-def">
        <h2 className="Montserrat">{this.state.text}</h2>
        {this.state.spellcheck !== null && (
          <div>
            <h3 className="Montserrat">spellCheck</h3>
            <div>

              <hr />
              {this.isEmpty(this.state.spellcheck.corrections) === true ? <h3 className
              ="Monstserrat">This word is spelled correctly</h3> : 
              <div>
                <div>
                <p className="Montserrat">Suggestion: {JSON.stringify(this.state.spellcheck.suggestion)}</p>
                </div>
              {correctedWords.map(info => 
                <div>
                  <h3 className="Montserrat">{info}</h3>
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
              </div>
              /*{/* <p className="Montserrat">{JSON.stringify(this.state.spellcheck.corrections)}</p> */
              }
            </div>
          </div>
        )}
      </div>
    );
  }
}