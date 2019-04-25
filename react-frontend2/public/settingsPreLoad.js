var plz;
function settingsPreLoad()
          {
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

chrome.storage.sync.get(["option1"],function(result){ //get the value of the first switch
    console.log("The value is"+result.option1);
   // alert(result.option1);

   checker= String(result.option1);//see if it is true or false from getting it from the api call 
   console.log(new String(checker).valueOf() === new String("true").valueOf());
   holdIt = new String(checker).valueOf() === new String("true").valueOf();

    chainItOp1(holdIt); //we have to chain because this api is asynchronous 

   console.log(holdIt);
});


/**
 * Begin option 2 pre load
 */
  chrome.storage.sync.get(["option2"],function(result2){ //get the value of the first switch
  console.log("The value is"+result2.option2);
 // alert(result.option1);

 checker2= String(result2.option2);//see if it is true or false from getting it from the api call 
 console.log(new String(checker2).valueOf() === new String("true").valueOf());
 holdIt2 = new String(checker2).valueOf() === new String("true").valueOf();

  chainItOp2(holdIt2); //we have to chain because this api is asynchronous 

 console.log(holdIt2);
});

/**
 * Begin option 3 pre load
 */
chrome.storage.sync.get(["option3"],function(result3){ //get the value of the first switch
  console.log("The value is"+result3.option3);
 checker3= String(result3.option3);//see if it is true or false from getting it from the api call 
 console.log(new String(checker3).valueOf() === new String("true").valueOf());
 holdIt3 = new String(checker3).valueOf() === new String("true").valueOf();
chainItOp3(holdIt3); //we have to chain because this api is asynchronous 
 console.log(holdIt3);
});

/**
 * Begin option 4 pre load
 */
chrome.storage.sync.get(["option4"],function(result4){ //get the value of the first switch
  console.log("The value is"+result4.option4);
 checker4= String(result4.option4);//see if it is true or false from getting it from the api call 
 console.log(new String(checker4).valueOf() === new String("true").valueOf());
 holdIt4 = new String(checker4).valueOf() === new String("true").valueOf();
  chainItOp4(holdIt4); //we have to chain because this api is asynchronous 
 console.log(holdIt4);
});

/**
 * Begin option 5 pre load 
 */
chrome.storage.sync.get(["option5"],function(result5){ //get the value of the first switch
  console.log("The value is"+result5.option5);
 checker5= String(result5.option5);//see if it is true or false from getting it from the api call 
 console.log(new String(checker5).valueOf() === new String("true").valueOf());
 holdIt5 = new String(checker5).valueOf() === new String("true").valueOf();
  chainItOp5(holdIt5); //we have to chain because this api is asynchronous 
 console.log(holdIt5);
});

/**
 * Begin option 6 pre load 
 */
chrome.storage.sync.get(["option6"],function(result6){ //get the value of the first switch
  console.log("The value is"+result6.option6);
 checker6= String(result6.option6);//see if it is true or false from getting it from the api call 
 console.log(new String(checker6).valueOf() === new String("true").valueOf());
 holdIt6 = new String(checker6).valueOf() === new String("true").valueOf();
  chainItOp6(holdIt6); //we have to chain because this api is asynchronous 
 console.log(holdIt6);
});


          };

function chainItOp1(theBool){ //used for seeing if the switch starts out as on or off based on what the user previously entered 
if(theBool ===true){
    //plz=theBool;
    document.getElementById("myonoffswitch").checked = true; //if it is true set the switch to true 
    console.log("switch 1 is now set to true");
}

else if(theBool === false){
    document.getElementById("myonoffswitch").checked = false; //set it to false 
    console.log("switch 1 now set to false");
   // plz=theBool;
}    
       //   document.getElementById("myonoffswitch").checked = true;
     //     document.getElementById("myonoffswitch2").checked = true; //randomly set other switches, just focusng on the first switch right now since the rest will be similar 
       //   document.getElementById("myonoffswitch5").checked = false;  
          };

          /**
           * for the second switch 
           * @param  theBool 
           */
          function chainItOp2(theBool){ //used for seeing if the switch starts out as on or off based on what the user previously entered 


            if(theBool ===true){
                //plz=theBool;
                document.getElementById("myonoffswitch2").checked = true; //if it is true set the switch to true 
                console.log("switch 2 is now set to true");
            }

            else if(theBool === false){
                document.getElementById("myonoffswitch2").checked = false; //set it to false 
                console.log("switch 2 now set to false");
               // plz=theBool;
            }          
                   //   document.getElementById("myonoffswitch").checked = true;
                      };          

                          /**
           * for the third switch 
           * @param  theBool 
           */
          function chainItOp3(theBool){ //used for seeing if the switch starts out as on or off based on what the user previously entered 


            if(theBool ===true){
                //plz=theBool;
                document.getElementById("myonoffswitch3").checked = true; //if it is true set the switch to true 
                console.log("switch 3 is now set to true");
            }

            else if(theBool === false){
                document.getElementById("myonoffswitch3").checked = false; //set it to false 
                console.log("switch 3 now set to false");
               // plz=theBool;
            }          
                   //   document.getElementById("myonoffswitch").checked = true;
                      }; 
                      /**
           * for the fourth switch 
           * @param  theBool 
           */
          function chainItOp4(theBool){ //used for seeing if the switch starts out as on or off based on what the user previously entered 


            if(theBool ===true){
                //plz=theBool;
                document.getElementById("myonoffswitch4").checked = true; //if it is true set the switch to true 
                console.log("switch 4 is now set to true");
            }

            else if(theBool === false){
                document.getElementById("myonoffswitch4").checked = false; //set it to false 
                console.log("switch 4 now set to false");
               // plz=theBool;
            }          
                   //   document.getElementById("myonoffswitch").checked = true;
                      };
                      /**
           * for the second switch 
           * @param  theBool 
           */
          function chainItOp5(theBool){ //used for seeing if the switch starts out as on or off based on what the user previously entered 


            if(theBool ===true){
                //plz=theBool;
                document.getElementById("myonoffswitch5").checked = true; //if it is true set the switch to true 
                console.log("switch 5 is now set to true");
            }

            else if(theBool === false){
                document.getElementById("myonoffswitch5").checked = false; //set it to false 
                console.log("switch now 5 set to false");
               // plz=theBool;
            }          
                   //   document.getElementById("myonoffswitch").checked = true;
                      };
                      /**
           * for the second switch 
           * @param  theBool 
           */
          function chainItOp6(theBool){ //used for seeing if the switch starts out as on or off based on what the user previously entered 


            if(theBool ===true){
                //plz=theBool;
                document.getElementById("myonoffswitch6").checked = true; //if it is true set the switch to true 
                console.log("switch 6 is now set to true");
            }

            else if(theBool === false){
                document.getElementById("myonoffswitch6").checked = false; //set it to false 
                console.log("switch 6 now set to false");
               // plz=theBool;
            }          
                   //   document.getElementById("myonoffswitch").checked = true;
                      };

       //   console.log("out of scope"+plz);
         // setTimeout(function(){console.log(plz)}, 2000);
          window.onload =settingsPreLoad;  //used to load this before the html file loads