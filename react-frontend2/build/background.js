/* global chrome */

const background = chrome.extension.getBackgroundPage();
chrome.contextMenus.create( {
  id: "Swift",
  title: "Swiftionary",
  contexts: ["selection"]

});

var conOption1;
var conOption1Checker="";
chrome.storage.sync.get(["option1"],function(result){ //or could try nesting multiple gets and putting multiple bools as params to one function to create the menu
  console.log("The value is"+result.option1);
 // alert(result.option1);
 conOption1Checker = String(result.option1); 
  conOption1 =new String(conOption1Checker).valueOf() === new String("true").valueOf(); //check if the value of the switch was true or false 
  console.log(conOption1);
  changeMenu(conOption1); //see if that context menu should be created or not 
});

//declaring a new set of variables because get is an asynchronous function 
var conOption2;
var conOption2Checker="";
chrome.storage.sync.get(["option2"],function(result){ //or could try nesting multiple gets and putting multiple bools as params to one function to create the menu
  console.log("The value is"+result.option2);
 // alert(result.option1);
 conOption2Checker = String(result.option2); 
  conOption2 =new String(conOption2Checker).valueOf() === new String("true").valueOf(); //check if the value of the switch was true or false 
  console.log(conOption2);
  changeMenu2(conOption2); //see if that context menu should be created or not 
});


/**
* third option
*/
var conOption3;
var conOption3Checker="";
chrome.storage.sync.get(["option3"],function(result){ //or could try nesting multiple gets and putting multiple bools as params to one function to create the menu
  console.log("The value is"+result.option3);
 // alert(result.option1);
 conOption3Checker = String(result.option3); 
  conOption3 =new String(conOption3Checker).valueOf() === new String("true").valueOf(); //check if the value of the switch was true or false 
  console.log(conOption3);
  changeMenu3(conOption3); //see if that context menu should be created or not 
});

/**
* fourth option
*/
var conOption4;
var conOption4Checker="";
chrome.storage.sync.get(["option4"],function(result){ //or could try nesting multiple gets and putting multiple bools as params to one function to create the menu
  console.log("The value is"+result.option4);
 // alert(result.option1);
 conOption4Checker = String(result.option4); 
  conOption4 =new String(conOption4Checker).valueOf() === new String("true").valueOf(); //check if the value of the switch was true or false 
  console.log(conOption4);
  changeMenu4(conOption4); //see if that context menu should be created or not 
});

/**
* fifth option 
*/
var conOption5;
var conOption5Checker="";
chrome.storage.sync.get(["option5"],function(result){ //or could try nesting multiple gets and putting multiple bools as params to one function to create the menu
  console.log("The value is"+result.option5);
 // alert(result.option1);
 conOption5Checker = String(result.option5); 
  conOption5 =new String(conOption5Checker).valueOf() === new String("true").valueOf(); //check if the value of the switch was true or false 
  console.log(conOption5);
  changeMenu5(conOption5); //see if that context menu should be created or not 
});
/**
* sixth option
*/
var conOption6;
var conOption6Checker="";
chrome.storage.sync.get(["option6"],function(result){ //or could try nesting multiple gets and putting multiple bools as params to one function to create the menu
  console.log("The value is"+result.option6);
 // alert(result.option1);
 conOption6Checker = String(result.option6); 
  conOption6 =new String(conOption6Checker).valueOf() === new String("true").valueOf(); //check if the value of the switch was true or false 
  console.log(conOption6);
  changeMenu6(conOption6); //see if that context menu should be created or not 
});

// chrome.contextMenus.create({
//   id: "Hello",
//   title:"Hello",
//   parentId: "Swift",
//   contexts:["selection"],
//   onclick: function(info,tab){
//     sendSearch(info.selectionText);
//   }
// });

//synchronize for the first option 
function changeMenu(firstOption){
  if(firstOption === false){ //if false then don't show option 
  console.log("this has hit false");
  }

  else if(firstOption === true){ //if true then create the option
  chrome.contextMenus.create( {
      id:"Definition",
      title:"Definition",
      parentId:"Swift",
      contexts:["selection"]

  })
  }

};

function changeMenu2(secondOption){
if(secondOption === false){ //if false then don't show option 
console.log("this has hit false");
}

else if(secondOption === true){ //if true then create the option
  chrome.contextMenus.create( {
    id:"Synonym",
    title:"Synonym",
    parentId:"Swift",
    contexts:["selection"]
})
}

};

function changeMenu3(thirdOption){
if(thirdOption === false){ //if false then don't show option 
console.log("this has hit false");
}

else if(thirdOption === true){ //if true then create the option
  chrome.contextMenus.create( {
    id:"Antonym",
    title:"Antonym",
    parentId:"Swift",
    contexts:["selection"]
})
}

};

function changeMenu4(fourthOption){
if(fourthOption === false){ //if false then don't show option 
console.log("this has hit false");
}

else if(fourthOption === true){ //if true then create the option
  chrome.contextMenus.create( {
    id:"Urban",
    title:"Urban",
    parentId:"Swift",
    contexts:["selection"]
})
}

};

function changeMenu5(fifthOption){
if(fifthOption === false){ //if false then don't show option 
console.log("this has hit false");
}

else if(fifthOption === true){ //if true then create the option
  chrome.contextMenus.create( {
    id:"spellcheck",
    title:"Spellcheck",
    parentId:"Swift",
    contexts:["selection"]
})
}

};


function changeMenu6(sixthOption){
if(sixthOption === false){ //if false then don't show option 
console.log("this has hit false");
}

else if(sixthOption === true){ //if true then create the option
  chrome.contextMenus.create( {
    id:"Description",
    title:"Description",
    parentId:"Swift",
    contexts:["selection"]

})
}

};
  chrome.runtime.onConnect.addListener(function(port) {
      console.assert(port.name == "conHandler");
      port.onMessage.addListener(function(msg) {
        if (msg.definitionMsg == "t")
          {
              chrome.contextMenus.create( {
                  id:"Definition",
                  title:"Definition",
                  parentId:"Swift",
                  contexts:["selection"]
              })
          }
        else if (msg.definitionMsg == "f")
        {
          chrome.contextMenus.remove("Definition");
        }

       if(msg.synonymMsg == "t"){
        chrome.contextMenus.create( {
          id:"Synonym",
          title:"Synonym",
          parentId:"Swift",
          contexts:["selection"]
      })
       }
       else if(msg.synonymMsg =="f"){
         chrome.contextMenus.remove("Synonym");
       } 

       if (msg.antonymMsg =="t"){
        chrome.contextMenus.create( {
          id:"Antonym",
          title:"Antonym",
          parentId:"Swift",
          contexts:["selection"]
      })
       }
       else if (msg.antonymMsg == "f"){
         chrome.contextMenus.remove("Antonym");
       }
       if(msg.slangMsg =="t"){
        chrome.contextMenus.create( {
          id:"Urban",
          title:"Urban",
          parentId:"Swift",
          contexts:["selection"]
      })
       }
       else if(msg.slangMsg== "f"){
         chrome.contextMenus.remove("Urban");
       }
       if (msg.spellcheckMsg =="t"){
        chrome.contextMenus.create( {
          id:"spellcheck",
          title:"Spellcheck",
          parentId:"Swift",
          contexts:["selection"]
      })
       }
       else if(msg.spellcheckMsg=="f"){
         chrome.contextMenus.remove("spellcheck");
       }
       if (msg.descriptionMsg == "t"){
        chrome.contextMenus.create( {
          id:"Description",
          title:"Description",
          parentId:"Swift",
          contexts:["selection"]

      })
       }
       else if(msg.descriptionMsg=="f"){
         chrome.contextMenus.remove("Description");
       }
      });
    });




const windowIDs = [];

chrome.contextMenus.onClicked.addListener(async (clickedData) => {
  if (clickedData.menuItemId === "Definition" && clickedData.selectionText) {

    windowIDs.forEach(id => 
      {chrome.windows.remove(id);
      var index = windowIDs.indexOf(id);
      if(index> -1) windowIDs.splice(index,1);});

    chrome.windows.create({
      url: chrome.runtime.getURL("index.html"),
      type: "popup",
      width: 400,
      height: 600
    }, (window) => {windowIDs.push(window.id);
    });

    await sleep(500);

    await chrome.runtime.sendMessage({
      target: "app",
      type: "definition",
      body: clickedData.selectionText
    });

  }
});

chrome.contextMenus.onClicked.addListener(async (clickedData) => {
  if (clickedData.menuItemId === "Synonym" && clickedData.selectionText) {

    windowIDs.forEach(id => 
      {chrome.windows.remove(id);
      var index = windowIDs.indexOf(id);
      if(index> -1) windowIDs.splice(index,1);});

    chrome.windows.create({
      url: chrome.runtime.getURL("index.html"),
      type: "popup",
      width: 400,
      height: 600
    }, (window) => {windowIDs.push(window.id);
    });

    await sleep(500);

    await chrome.runtime.sendMessage({
      target: "app",
      type: "synonym",
      body: clickedData.selectionText
    });

  }
});

chrome.contextMenus.onClicked.addListener(async (clickedData) => {
  if (clickedData.menuItemId === "Antonym" && clickedData.selectionText) {

    windowIDs.forEach(id => 
      {chrome.windows.remove(id);
      var index = windowIDs.indexOf(id);
      if(index> -1) windowIDs.splice(index,1);});

    chrome.windows.create({
      url: chrome.runtime.getURL("index.html"),
      type: "popup",
      width: 400,
      height: 600
    }, (window) => {windowIDs.push(window.id);
    });

    await sleep(500);

    await chrome.runtime.sendMessage({
      target: "app",
      type: "antonym",
      body: clickedData.selectionText
    });

  }
});


chrome.contextMenus.onClicked.addListener(async (clickedData) => {
  if (clickedData.menuItemId === "Urban" && clickedData.selectionText) {

    windowIDs.forEach(id => 
      {chrome.windows.remove(id);
      var index = windowIDs.indexOf(id);
      if(index> -1) windowIDs.splice(index,1);});

    chrome.windows.create({
      url: chrome.runtime.getURL("index.html"),
      type: "popup",
      width: 400,
      height: 600
    }, (window) => {windowIDs.push(window.id);
    });

    await sleep(200);

    await chrome.runtime.sendMessage({
      target: "app",
      type: "urban",
      body: clickedData.selectionText
    });



  }
});


chrome.contextMenus.onClicked.addListener(async (clickedData) => {
  if (clickedData.menuItemId === "spellcheck" && clickedData.selectionText) {

    windowIDs.forEach(id => 
      {chrome.windows.remove(id);
      var index = windowIDs.indexOf(id);
      if(index> -1) windowIDs.splice(index,1);});

    chrome.windows.create({
      url: chrome.runtime.getURL("index.html"),
      type: "popup",
      width: 400,
      height: 600
    }, (window) => {windowIDs.push(window.id);
    });

    await sleep(500);

    await chrome.runtime.sendMessage({
      target: "app",
      type: "spellcheck",
      body: clickedData.selectionText
    });

  }
});


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "pDefinition");
  port.onMessage.addListener(function(msg) {
    if (msg.menuItemId === "Definition" && msg.selectionText) {
      chrome.runtime.sendMessage({
        target: "app",
        type: "definition",
        body: msg.selectionText
      });

      chrome.windows.create({
        url: chrome.runtime.getURL("index.html"),
        type: "popup",
        width: 200,
        height: 200
      });

      chrome.runtime.onMessage.addListener(request => {
        port.onMessage.addListener(request => {
          if (request.target === "background") {
            if (request.type === "definition") {
            }
          }
        });
      });
    }
  });
});

chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "pUrban");
  port.onMessage.addListener(function(msg) {
    if (msg.menuItemId === "Urban" && msg.selectionText) {
      chrome.runtime.sendMessage({
        target: "app",
        type: "urban",
        body: msg.selectionText
      });

      chrome.windows.create({
        url: chrome.runtime.getURL("index.html"),
        type: "popup",
        width: 200,
        height: 200
      });

      chrome.runtime.onMessage.addListener(request => {
        port.onMessage.addListener(request => {
          if (request.target === "background") {
            if (request.type === "urban") {
            }
          }
        });
      });
    }
  });
});

chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "pSynonym");
  port.onMessage.addListener(function(msg) {
    if (msg.menuItemId === "Synonym" && msg.selectionText) {
      chrome.runtime.sendMessage({
        target: "app",
        type: "synonym",
        body: msg.selectionText
      });

      chrome.windows.create({
        url: chrome.runtime.getURL("index.html"),
        type: "popup",
        width: 200,
        height: 200
      });

      chrome.runtime.onMessage.addListener(request => {
        port.onMessage.addListener(request => {
          if (request.target === "background") {
            if (request.type === "synonym") {
            }
          }
        });
      });
    }
  });
});

chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "pSpellCheck");
  port.onMessage.addListener(function(msg) {
    if (msg.menuItemId === "spellcheck" && msg.selectionText) {
      chrome.runtime.sendMessage({
        target: "app",
        type: "spellcheck",
        body: msg.selectionText
      });

      chrome.windows.create({
        url: chrome.runtime.getURL("index.html"),
        type: "popup",
        width: 200,
        height: 200
      });

      chrome.runtime.onMessage.addListener(request => {
        port.onMessage.addListener(request => {
          if (request.target === "background") {
            if (request.type === "spellcheck") {
            }
          }
        });
      });
    }
  });
});

chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "pDescription");
  port.onMessage.addListener(function(msg) {
    if (msg.menuItemId === "Description" && msg.selectionText) {
      chrome.runtime.sendMessage({
        target: "app",
        type: "description",
        body: msg.selectionText
      });

      chrome.windows.create({
        url: chrome.runtime.getURL("index.html"),
        type: "popup",
        width: 200,
        height: 200
      });

      chrome.runtime.onMessage.addListener(request => {
        port.onMessage.addListener(request => {
          if (request.target === "background") {
            if (request.type === "description") {
            }
          }
        });
      });
    }
  });
});

chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "pSpellCheck");
  port.onMessage.addListener(function(msg) {
    if (msg.menuItemId === "spellcheck" && msg.selectionText) {
      chrome.runtime.sendMessage({
        target: "app",
        type: "spellcheck",
        body: msg.selectionText
      });

      chrome.windows.create({
        url: chrome.runtime.getURL("index.html"),
        type: "popup",
        width: 200,
        height: 200
      });

      chrome.runtime.onMessage.addListener(request => {
        port.onMessage.addListener(request => {
          if (request.target === "background") {
            if (request.type === "spellcheck") {
            }
          }
        });
      });
    }
  });
});

// chrome.contextMenus.onClicked.addListener(tab => {
//   chrome.runtime.sendMessage({ type: "message" });
// });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.type === "message") {
//     chrome.windows.create({
//       url: chrome.runtime.getURL("index.html"),
//       //type: "normal"
//       type: "popup",
//       width: 200,
//       height: 200
//     });
//     chrome.runtime.sendMessage({
//       target: "app",
//       type: "setMessage",
//       body: "How are you"
//     });
//   }
// });