// chrome.storage.local.set({"Test":"hello"});
// console.log("hello");
// chrome.storage.local.get(["Test"],function(result){
//     console.log("The value is"+result.key);
//     alert(result.Test);
// });

console.log("hello");
theContextMenu();
function theContextMenu(){
  //  chrome.runtime.reload();

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



//console.log("passed the if statements");
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
};

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

    chrome.runtime.onConnect.addListener(function(port) {
        console.assert(port.name == "conHandler");
        port.onMessage.addListener(function(msg) {
          if (msg.checkerino == "t")
            {
                chrome.contextMenus.create( {
                    id:"Definition",
                    title:"Definition",
                    parentId:"Swift",
                    contexts:["selection"]
                })
            }
          else if (msg.checkerino == "f")
          {
            chrome.contextMenus.remove("Definition");
          }
           
        });
      });