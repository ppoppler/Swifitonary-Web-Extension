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

  //sends a message that this is type Wiki
  sendRequest() {
    chrome.runtime.sendMessage({ target: "background", type: "wiki" });
  }

  //if it is type wiki then wait to get the word and extract the wiki text
  async handleMessage(msg) {
    if (msg.target === "app") {
      if (msg.type === "wiki") {
        const wiki = await getWiki(msg.body);
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

//method to remove the html tags
 takeString(theResult){
 theResult=theResult.replace(/<(?:.|\n|\\n)*?>/gm, '');
 var stringAnswer="";
 for (var i =0; i<theResult.length;i++)
 {
    if (theResult.charAt(i) === "\\" &&  theResult.charAt(i+1) === "n")
    {
      theResult=theResult.replace(theResult.charAt(i+1),"");
    }

    else
    {
      stringAnswer+=theResult.charAt(i);
  
    }
 }
return stringAnswer;
}

  //renders the text and format of wiki description
  render() {
    return ( 
      <div className="container main-def">
        <h2 className="Montserrat">{this.state.text}</h2>
        {this.state.wiki !== null && (
          <div>
            <h3 className="Montserrat">Wiki Definition</h3>
            {this.isEmpty(this.state.wiki.extract)===true ? <h4 className="Montserrat">There are no wiki suggestions for this text</h4>:<div>

            <p className="Montserrat">{this.takeString(JSON.stringify(this.state.wiki.extract))}</p>
          </div>
            
            }
            </div>
        )}
      </div>
    );
  }
}
