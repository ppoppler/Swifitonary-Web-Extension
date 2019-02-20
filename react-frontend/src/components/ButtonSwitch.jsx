import React, { Component } from "react";
import "../art.css";


export default class ButtonSwitch extends Component {
  render() {
    return (

      <div>
        <script src="buttonsFunction.js"></script>
        <link rel="stylesheet" href="art.css"/>
      <li className="listTest">
        Translation
        <div className="buttonPos">
          <div className="onoffswitch ripple">
            <input
              type="checkbox"
              name="onoffswitch"
              class="onoffswitch-checkbox"
              id="myonoffswitch"
              checked
            />
            <label className="onoffswitch-label" for="myonoffswitch"/>
          </div>
        </div>
      </li>
      </div>
    );
  }
}
