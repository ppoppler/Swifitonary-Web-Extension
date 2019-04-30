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

 takeString(theResult){
 theResult=theResult.replace(/<(?:.|\n|\\n)*?>/gm, '');
 var yes="", holdit;
 for (var i =0; i<theResult.length;i++)
 {
   var check=false;
    if (theResult.charAt(i) === "\\" &&  theResult.charAt(i+1) === "n")
    {
      console.log(theResult.charAt(i+1));
      theResult=theResult.replace(theResult.charAt(i+1),"");
    }

    else
    {
      yes+=theResult.charAt(i);
  
    }
 }
return yes;
}

  render() {
    return ( 
      <div className="container main-def">
        <h2 className="Montserrat">{this.state.text}</h2>
        {this.state.wiki !== null && (
          <div>
            <h3 className="Montserrat">Wiki</h3>
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
