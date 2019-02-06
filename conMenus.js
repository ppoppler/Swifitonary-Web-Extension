chrome.contextMenus.create( {
    id: "Swift",
    title: "Swiftionary",
    contexts: ["selection"]
});

chrome.contextMenus.create( {
    id:"Defintion",
    title:"Definition",
    parentId:"Swift",
    contexts:["selection"]
   // onclick:
})

chrome.contextMenus.create( {
    id:"Synonym",
    title:"Synonym",
    parentId:"Swift",
    contexts:["selection"]
   // onclick:
})
  
chrome.contextMenus.create( {
    id:"Antoynm",
    title:"Antonym",
    parentId:"Swift",
    contexts:["selection"]
   // onclick:
})

chrome.contextMenus.create( {
    id:"Slang",
    title:"Slang",
    parentId:"Swift",
    contexts:["selection"]
   // onclick:
})

chrome.contextMenus.create( {
    id:"Slang",
    title:"Slang",
    parentId:"Swift",
    contexts:["selection"]
   // onclick:
})

chrome.contextMenus.create( {
    id:"Spellcheck",
    title:"Spellcheck",
    parentId:"Swift",
    contexts:["selection"]
   // onclick:
})

chrome.contextMenus.create( {
    id:"Translation",
    title:"Translation",
    parentId:"Swift",
    contexts:["selection"]
   // onclick:
})