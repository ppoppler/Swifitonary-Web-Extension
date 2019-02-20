chrome.contextMenus.create( {
    id: "Swift",
    title: "Swiftionary",
    contexts: ["selection"]
});

chrome.contextMenus.create( {
    id:"Definition",
    title:"Definition",
    parentId:"Swift",
    contexts:["selection"]

})

chrome.contextMenus.create( {
    id:"Synonym",
    title:"Synonym",
    parentId:"Swift",
    contexts:["selection"]
})
  
chrome.contextMenus.create( {
    id:"Antonym",
    title:"Antonym",
    parentId:"Swift",
    contexts:["selection"]
})

chrome.contextMenus.create( {
    id:"Slang",
    title:"Slang",
    parentId:"Swift",
    contexts:["selection"]
})



chrome.contextMenus.create( {
    id:"Spellcheck",
    title:"Spellcheck",
    parentId:"Swift",
    contexts:["selection"]
})

chrome.contextMenus.create( {
    id:"Translation",
    title:"Translation",
    parentId:"Swift",
    contexts:["selection"]

})
chrome.contextMenus.onClicked.addListener(function(clickData){
if(clickData.menuItemId === "Definition" && clickData.selectionText){
  // alert("Definition option selected, the word that was highlighted is: "+clickData.selectionText);

  chrome.windows.create({
    url: chrome.runtime.getURL("frameless_window.html"),
    //type: "normal"
    type:"popup",
    width: 400,
    height: 400
  });

}
else if(clickData.menuItemId === "Synonym" && clickData.selectionText){
    alert("Synonym option selected, the word that was highlighted is: "+clickData.selectionText); //alert that prints the word that was highlighted into alert box
}
})