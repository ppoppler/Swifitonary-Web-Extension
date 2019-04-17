/* global chrome */

const background = chrome.extension.getBackgroundPage();
chrome.contextMenus.create({
  id: "Swift",
  title: "Swiftionary",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "Definition",
  title: "Definition",
  parentId: "Swift",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "Synonym",
  title: "Definition",
  parentId: "Swift",
  contexts: ["selection"]
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

    await sleep(200);

    await chrome.runtime.sendMessage({
      target: "app",
      type: "definition",
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
