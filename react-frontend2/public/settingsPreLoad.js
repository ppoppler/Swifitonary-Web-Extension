var plz;
function settingsPreLoad()
          {
//variables for each context menu option 
var checker="";
var checker2="";
var checker3="";
var checker4="";
var checker5="";
var checker6="";
var holdIt;
var holdIt2;
var holdIt3;
var holdIt4;
var holdIt5;
var holdIt6;

/**
 * Begin option 1 pre load
 */
chrome.storage.sync.get(["option1"],function(result){ //get the value of the first switch
   checker= String(result.option1);//see if it is true or false from getting it from the api call 
   holdIt = new String(checker).valueOf() === new String("true").valueOf(); //check if it is equal to true 
    chainItOp1(holdIt); //we have to chain because this api is asynchronous 
});


/**
 * Begin option 2 pre load
 */
  chrome.storage.sync.get(["option2"],function(result2){ //get the value of the second switch from their google account to see what preferences they had saved previously when loading the switches
 checker2= String(result2.option2);//see if it is true or false from getting it from the api call 
 holdIt2 = new String(checker2).valueOf() === new String("true").valueOf();
chainItOp2(holdIt2); //we have to chain because this api is asynchronous 

});

/**
 * Begin option 3 pre load
 */
chrome.storage.sync.get(["option3"],function(result3){ //get the value of the third switch
 checker3= String(result3.option3);//see if it is true or false from getting it from the api call 
 holdIt3 = new String(checker3).valueOf() === new String("true").valueOf();
chainItOp3(holdIt3); //we have to chain because this api is asynchronous 
});

/**
 * Begin option 4 pre load
 */
chrome.storage.sync.get(["option4"],function(result4){ //get the value of the fourth switch
 checker4= String(result4.option4);//see if it is true or false from getting it from the api call 
 holdIt4 = new String(checker4).valueOf() === new String("true").valueOf();
chainItOp4(holdIt4); //we have to chain because this api is asynchronous 
});

/**
 * Begin option 5 pre load 
 */
chrome.storage.sync.get(["option5"],function(result5){ //get the value of the fifth switch
 checker5= String(result5.option5);//see if it is true or false from getting it from the api call 
 holdIt5 = new String(checker5).valueOf() === new String("true").valueOf();
  chainItOp5(holdIt5); //we have to chain because this api is asynchronous 
});

/**
 * Begin option 6 pre load 
 */
chrome.storage.sync.get(["option6"],function(result6){ //get the value of the sixth switch
 checker6= String(result6.option6);//see if it is true or false from getting it from the api call 
 holdIt6 = new String(checker6).valueOf() === new String("true").valueOf();
  chainItOp6(holdIt6); //we have to chain because this api is asynchronous 
});


          };

function chainItOp1(theBool){ //used for seeing if the switch starts out as on or off based on what the user previously entered 
if(theBool ===true){
    document.getElementById("myonoffswitch").checked = true; //if it is true set the switch to true 
}

else if(theBool === false){
    document.getElementById("myonoffswitch").checked = false; //set it to false   
}       
          };

          /**
           * for the second switch 
           * @param  theBool 
           */
          function chainItOp2(theBool){ //used for seeing if the switch starts out as on or off based on what the user previously entered 


            if(theBool ===true){
                document.getElementById("myonoffswitch2").checked = true; //if it is true set the switch to true 
            }

            else if(theBool === false){
                document.getElementById("myonoffswitch2").checked = false; //set it to false 
            }          
                
                      };          

                          /**
           * for the third switch 
           * @param  theBool 
           */
          function chainItOp3(theBool){ //used for seeing if the switch starts out as on or off based on what the user previously entered 


            if(theBool ===true){
                document.getElementById("myonoffswitch3").checked = true; //if it is true set the switch to true 
            }

            else if(theBool === false){
                document.getElementById("myonoffswitch3").checked = false; //set it to false 
            }          
                      }; 
                      /**
           * for the fourth switch 
           * @param  theBool 
           */
          function chainItOp4(theBool){ //used for seeing if the switch starts out as on or off based on what the user previously entered 

            if(theBool ===true){
                document.getElementById("myonoffswitch4").checked = true; //if it is true set the switch to true 
            }

            else if(theBool === false){
                document.getElementById("myonoffswitch4").checked = false; //set it to false 

            }          
                      };
                      /**
           * for the fifth switch 
           * @param  theBool 
           */
          function chainItOp5(theBool){ //used for seeing if the switch starts out as on or off based on what the user previously entered 


            if(theBool ===true){
                document.getElementById("myonoffswitch5").checked = true; //if it is true set the switch to true  
            }

            else if(theBool === false){
                document.getElementById("myonoffswitch5").checked = false; //set it to false 
            }          
                      };
                      /**
           * for the sixth switch 
           * @param  theBool 
           */
          function chainItOp6(theBool){ //used for seeing if the switch starts out as on or off based on what the user previously entered 

            if(theBool ===true){
                document.getElementById("myonoffswitch6").checked = true; //if it is true set the switch to true 
            }

            else if(theBool === false){
                document.getElementById("myonoffswitch6").checked = false; //set it to false 
            }          
                      };
          window.onload =settingsPreLoad;  //used to load this before the html file loads