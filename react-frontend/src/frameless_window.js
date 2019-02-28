import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// window.onfocus = function() {
//   console.log("focus");
//   focusTitlebars(true);
// };

// window.onblur = function() {
//   console.log("blur");
//   focusTitlebars(false);
// };

// window.onresize = function() {
//   updateContentStyle();
// };

// window.onload = function() {
//   document.getElementById("close-window-button").onclick = function() {
//     window.close();
//   };

//   updateContentStyle();
// };

export default class FramelessWindow extends React.Component {

  render() {
    return (
      <div>
        <h2>this.props.word</h2>
        <h3>this.props.pronunciation</h3>
        <p>
          <i>this.props.speechType</i>
        </p>
        <p>
          this.props.definition
        </p>
        <br />
        <br />
        <button id="close-window-button">Close Window</button>
      </div>
    );
  }
}

ReactDOM.render(<FramelessWindow word="Search" pronunciation="hello"
speechType="verb" definition="to look for something"/>, document.getElementById('inner-content'));
