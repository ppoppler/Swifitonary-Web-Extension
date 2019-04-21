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
  title: "Synonym",
  parentId: "Swift",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "Antonym",
  title: "Antonym",
  parentId: "Swift",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "Urban",
  title: "Urban",
  parentId: "Swift",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "spellCheck",
  title: "SpellCheck",
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
  if (clickedData.menuItemId === "spellCheck" && clickedData.selectionText) {

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
    if (msg.menuItemId === "SpellCheck" && msg.selectionText) {
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
  console.assert(port.name == "pAntonym");
  port.onMessage.addListener(function(msg) {
    if (msg.menuItemId === "Antonym" && msg.selectionText) {
      chrome.runtime.sendMessage({
        target: "app",
        type: "antonym",
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
            if (request.type === "antonym") {
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
