var plz;
function settingsPreLoad()
          {
var checker="";
var holdIt;

chrome.storage.sync.get(["option1"],function(result){ //get the value of the first switch
    console.log("The value is"+result.option1);
   // alert(result.option1);
   
   checker= String(result.option1);//see if it is true or false from getting it from the api call 
   console.log(new String(checker).valueOf() === new String("true").valueOf());
   holdIt = new String(checker).valueOf() === new String("true").valueOf();
 chainIt(holdIt); //we have to chain because this api is asynchronous 

   console.log(holdIt);
});
          };

function chainIt(theBool){ //used for seeing if the switch starts out as on or off based on what the user previously entered 


if(theBool ===true){
    //plz=theBool;
    document.getElementById("myonoffswitch").checked = true; //if it is true set the switch to true 
    console.log("switch is now set to true");
}

else if(theBool === false){
    document.getElementById("myonoffswitch").checked = false; //set it to false 
    console.log("switch now set to false");
   // plz=theBool;
}

            
       //   document.getElementById("myonoffswitch").checked = true;
          document.getElementById("myonoffswitch2").checked = true; //randomly set other switches, just focusng on the first switch right now since the rest will be similar 
          document.getElementById("myonoffswitch5").checked = false;
    
          };    
       //   console.log("out of scope"+plz);
         // setTimeout(function(){console.log(plz)}, 2000);
          window.onload =settingsPreLoad;  //used to load this before the html file loads 