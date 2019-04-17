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

chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name=="pDefinition");
  port.onMessage.addListener(function(msg) {
  if (msg.menuItemId === "Definition") {
    port.onMessage.addListener((request)=>{
      if(request.target==="background"){
        if(request.type === "definition"){
          chrome.runtime.sendMessage({
            target: 'app',
            type: 'definition',
            body: clickedData.selectionText
          });
        }
      }
    });
  }
  })
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
