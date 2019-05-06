/* global chrome */

const background = chrome.extension.getBackgroundPage();
chrome.contextMenus.create( { //create the parent extension context menu option
  id: "Swift",
  title: "Swiftionary",
  contexts: ["selection"]

});

var conOption1;
var conOption1Checker="";
chrome.storage.sync.get(["option1"],function(result){ //getting the saved settings preference for the first option from users google account 
 conOption1Checker = String(result.option1); //convert the value associated with that key to a string 
  conOption1 =new String(conOption1Checker).valueOf() === new String("true").valueOf(); //check if the value of the switch was true or false 
  changeMenu(conOption1); //see if that context menu should be created or not 
});

/**
* second option
* declaring a new set of variables because get is an asynchronous function 
*/
var conOption2;
var conOption2Checker="";
chrome.storage.sync.get(["option2"],function(result){ 
 conOption2Checker = String(result.option2); //convert to string 
  conOption2 =new String(conOption2Checker).valueOf() === new String("true").valueOf(); //check if the value of the switch was true or false 
  changeMenu2(conOption2); //see if that context menu should be created or not 
});


/**
* third option
*/
var conOption3;
var conOption3Checker="";
chrome.storage.sync.get(["option3"],function(result){ 
 conOption3Checker = String(result.option3); 
  conOption3 =new String(conOption3Checker).valueOf() === new String("true").valueOf(); //check if the value of the switch was true or false 
  changeMenu3(conOption3); //see if that context menu should be created or not 
});

/**
* fourth option
*/
var conOption4;
var conOption4Checker="";
chrome.storage.sync.get(["option4"],function(result){
 conOption4Checker = String(result.option4); 
  conOption4 =new String(conOption4Checker).valueOf() === new String("true").valueOf(); //check if the value of the switch was true or false 
  changeMenu4(conOption4); //see if that context menu should be created or not 
});

/**
* fifth option 
*/
var conOption5;
var conOption5Checker="";
chrome.storage.sync.get(["option5"],function(result){ 
 conOption5Checker = String(result.option5); 
  conOption5 =new String(conOption5Checker).valueOf() === new String("true").valueOf(); //check if the value of the switch was true or false 
  changeMenu5(conOption5); //see if that context menu should be created or not 
});

/**
* sixth option
*/
var conOption6;
var conOption6Checker="";
chrome.storage.sync.get(["option6"],function(result){ 
 conOption6Checker = String(result.option6); 
  conOption6 =new String(conOption6Checker).valueOf() === new String("true").valueOf(); //check if the value of the switch was true or false 
  changeMenu6(conOption6); //see if that context menu should be created or not 
});


//synchronize for the first option 
function changeMenu(firstOption){
  if(firstOption === false){ //if false then don't show option 
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

}

else if(fourthOption === true){ //if true then create the option
  chrome.contextMenus.create( {
    id:"Urban",
    title:"Slang",
    parentId:"Swift",
    contexts:["selection"]
})
}

};

function changeMenu5(fifthOption){
if(fifthOption === false){ //if false then don't show option 
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

  chrome.runtime.onConnect.addListener(function(port) { //listens to buttonsfunction.js for any changes so the context menu can be updated instantly
      console.assert(port.name == "conHandler");
      port.onMessage.addListener(function(msg) {
        if (msg.definitionMsg == "t") //if it hears t then create that context menu option 
          {
              chrome.contextMenus.create( {
                  id:"Definition",
                  title:"Definition",
                  parentId:"Swift",
                  contexts:["selection"]
              })
          }
        else if (msg.definitionMsg == "f") //if f then remove that context menu option 
        {
          chrome.contextMenus.remove("Definition");
        }

       if(msg.synonymMsg == "t"){ //if that message equals t then create the context menu option for synoynm 
        chrome.contextMenus.create( {
          id:"Synonym",
          title:"Synonym",
          parentId:"Swift",
          contexts:["selection"]
      })
       }
       else if(msg.synonymMsg =="f"){ //if the message equals f then remove that context menu option
         chrome.contextMenus.remove("Synonym");
       } 

       if (msg.antonymMsg =="t"){ //if t then create antonym
        chrome.contextMenus.create( {
          id:"Antonym",
          title:"Antonym",
          parentId:"Swift",
          contexts:["selection"]
      })
       }
       else if (msg.antonymMsg == "f"){ //if f then remove antonym 
         chrome.contextMenus.remove("Antonym");
       }
       if(msg.slangMsg =="t"){ //if t then create the urban context menu option 
        chrome.contextMenus.create( {
          id:"Urban",
          title:"Slang",
          parentId:"Swift",
          contexts:["selection"]
      })
       }
       else if(msg.slangMsg== "f"){ //if f then remove urban context menu option 
         chrome.contextMenus.remove("Urban");
       }
       if (msg.spellcheckMsg =="t"){ //if t then create the spell check context menu option 
        chrome.contextMenus.create( {
          id:"spellcheck",
          title:"Spellcheck",
          parentId:"Swift",
          contexts:["selection"]
      })
       }
       else if(msg.spellcheckMsg=="f"){ //if f message is received then remove the spellcheck option 
         chrome.contextMenus.remove("spellcheck");
       }
       if (msg.descriptionMsg == "t"){ //if the message t is received then create the description context menu option 
        chrome.contextMenus.create( {
          id:"Description",
          title:"Description",
          parentId:"Swift",
          contexts:["selection"]

      })
       }
       else if(msg.descriptionMsg=="f"){ //if f then remove the description option 
         chrome.contextMenus.remove("Description");
       }
      });
    });


const windowIDs = [];
/*
* listens for a click and if definition was chosen and text is highlighted, then sends that message to the definition class 
*/
chrome.contextMenus.onClicked.addListener(async (clickedData) => { //listen for a click 
  if (clickedData.menuItemId === "Definition" && clickedData.selectionText) {  //if they highlighted text and chose the definition option

    windowIDs.forEach(id => 
      {chrome.windows.remove(id); //remove the previous frameless window 
      var index = windowIDs.indexOf(id);
      if(index> -1) windowIDs.splice(index,1);}); //splice that index 

    chrome.windows.create({ //create the frameless window 
      url: chrome.runtime.getURL("index.html"),
      type: "popup",
      width: 400, //dimensions 
      height: 600
    }, (window) => {windowIDs.push(window.id);
    });

    await sleep(500); //sleep for 1000 milliseconds to allow the api to have time to retrieve the data 

    await chrome.runtime.sendMessage({ //send a message to run the definition class which has the definition api and send the text that was highlighted 
      target: "app",
      type: "definition",
      body: clickedData.selectionText
    });

  }
});

/*
* listens for a click and if synonym was chosen and text is highlighted, then sends that mesage to the synonym class 
*/
chrome.contextMenus.onClicked.addListener(async (clickedData) => {
  if (clickedData.menuItemId === "Synonym" && clickedData.selectionText) {

    windowIDs.forEach(id => //remove previous window 
      {chrome.windows.remove(id);
      var index = windowIDs.indexOf(id);
      if(index> -1) windowIDs.splice(index,1);});

    chrome.windows.create({
      url: chrome.runtime.getURL("index.html"),//create window 
      type: "popup",
      width: 400,
      height: 600
    }, (window) => {windowIDs.push(window.id);
    });

    await sleep(500);//sleep for 1000 milliseconds to wait for api to retrieve data 

    await chrome.runtime.sendMessage({ //send message to run synonym 
      target: "app",
      type: "synonym",
      body: clickedData.selectionText
    });

  }
});
/*
* listens for a click and if antonym was chosen and text is highlighted, then sends that mesage to the antonym class 
*/
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

/*
* listens for a click and if urban was chosen and text is highlighted, then sends that mesage to the urban class 
*/
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

    await sleep(500);

    await chrome.runtime.sendMessage({
      target: "app",
      type: "urban",
      body: clickedData.selectionText
    });



  }
});

/*
* listens for a click and if spellcheck was chosen and text is highlighted, then sends that mesage to the spellcheck class 
*/
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
/*
* listens for a click and if description was chosen and text is highlighted, then sends that mesage to the description class 
*/
chrome.contextMenus.onClicked.addListener(async (clickedData) => {
  if (clickedData.menuItemId === "Description" && clickedData.selectionText) {

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
      type: "wiki",
      body: clickedData.selectionText
    });

  }
});

//sleep function to make wait for the api to retrieve data 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//listener function for definition
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "pDefinition");
  port.onMessage.addListener(function(msg) {
    if (msg.menuItemId === "Definition" && msg.selectionText) {
      chrome.runtime.sendMessage({
        target: "app",
        type: "definition", //send the definition as a message which will then use the definition class 
        body: msg.selectionText
      });

      chrome.windows.create({ //create the frameless window 
        url: chrome.runtime.getURL("index.html"),
        type: "popup",
        width: 200,
        height: 200
      });
      //listen for message 
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
/*
*listener function for urban
*/
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
/*
*listener function for synonym
*/
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
/*
*listener function for spellcheck
*/
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
/*
*listener function for description 
*/
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "pDescription");
  port.onMessage.addListener(function(msg) {
    if (msg.menuItemId === "Description" && msg.selectionText) {
      chrome.runtime.sendMessage({
        target: "app",
        type: "wiki",
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
            if (request.type === "wiki") {
            }
          }
        });
      });
    }
  });
});

