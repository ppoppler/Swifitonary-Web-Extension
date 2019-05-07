//button 1 variables 
var wrapper = document.querySelector('.wrapper');
var button = document.getElementById('.button');
var ripple = document.querySelector('.ripple');


//button 2 variables
var wrapper2 = document.querySelector('.wrapper2');
var button2 = document.querySelector('.button2');
var ripple2 = document.querySelector('.ripple2');

//button 3 variables
var wrapper3 = document.querySelector('.wrapper3');
var button3 = document.querySelector('.button3');
var ripple3 = document.querySelector('.ripple3');

//button 4 variables
var wrapper4 = document.querySelector('.wrapper4');
var button4 = document.querySelector('.button4');
var ripple4 = document.querySelector('.ripple4');

//button 5 variables
var wrapper5 = document.querySelector('.wrapper5');
var button5 = document.querySelector('.button5');
var ripple5 = document.querySelector('.ripple5');

//button 6 variables
var wrapper6 = document.querySelector('.wrapper6');
var button6 = document.querySelector('.button6');
var ripple6 = document.querySelector('.ripple6');

//button 7 variables
var wrapper7 = document.querySelector('.wrapper7');
var button7 = document.querySelector('.button7');
var ripple7 = document.querySelector('.ripple7');

//button 8 variables
var wrapper8 = document.querySelector('.wrapper8');
var button8 = document.querySelector('.button8');
var ripple8 = document.querySelector('.ripple8');


document.getElementById("myonoffswitch").addEventListener("click", switch1Function); //used to call our function that will sync the new preferences
document.getElementById("myonoffswitch2").addEventListener("click", switch2Function); 
document.getElementById("myonoffswitch3").addEventListener("click", switch3Function); 
document.getElementById("myonoffswitch4").addEventListener("click", switch4Function); 
document.getElementById("myonoffswitch5").addEventListener("click", switch5Function); 
document.getElementById("myonoffswitch6").addEventListener("click", switch6Function); 

var port = chrome.runtime.connect({name: "conHandler"});//create port for message passing 

function switch1Function(){ //function to set the switch and sync it 
  var enabled1;
  // Get the checkbox
  var checkBox = document.getElementById("myonoffswitch"); //connect to the switch
  if (checkBox.checked){
    enabled1 = "true";
   chrome.storage.sync.set({"option1": enabled1}); //option1 is the key and set it to true 
   port.postMessage({definitionMsg: "t"});
   chrome.storage.sync.get(["option1"],function(result){ //was using this to see in the console if stuff was being set 
 
 });
 
 } 
 else {
  enabled1 = "false";
  chrome.storage.sync.set({"option1": enabled1}); //otherwise sync the word false 
  port.postMessage({definitionMsg: "f"}); //send f as a message pass to the port for that respective option 
}

};

/**
 * functionality for the second button 
 */
function switch2Function(){ //function to set the switch and sync it 
  var enabled1;
  var checkBox = document.getElementById("myonoffswitch2"); //connect to the switch
  if (checkBox.checked){
    enabled1 = "true";
   chrome.storage.sync.set({"option2": enabled1}); //set the value for option 2 to true 
   port.postMessage({synonymMsg: "t"}); //set the message to t for synonym 
   chrome.storage.sync.get(["option2"],function(result){ 
 });

 } 
 else {
  enabled1 = "false";
  chrome.storage.sync.set({"option2": enabled1}); //otherwise sync the word false to the option2 key 

  port.postMessage({synonymMsg: "f"}); //post message f to be associated with synonymMsg

}

};


/**
 * functionality for the third button 
 */
function switch3Function(){ //function to set the switch and sync it 
  var enabled1;
  var checkBox = document.getElementById("myonoffswitch3"); //connect to the switch

  if (checkBox.checked){
    enabled1 = "true";

   chrome.storage.sync.set({"option3": enabled1}); //set option 3 to true 

   port.postMessage({antonymMsg: "t"}); //send message as t to the port for antonym msg 

   chrome.storage.sync.get(["option3"],function(result){ 
 });

 } 
 else {
  enabled1 = "false";
  chrome.storage.sync.set({"option3": enabled1}); //otherwise sync the word false 

  port.postMessage({antonymMsg: "f"});//post the message f to be associated with anonym msg

}

};


/**
 * functionality for the fourth button 
 */
function switch4Function(){ //function to set the switch and sync it 
  var enabled1;
  var checkBox = document.getElementById("myonoffswitch4"); //connect to the switch

  if (checkBox.checked){
    enabled1 = "true"; //if the checkbox is checked set the value to true 

   chrome.storage.sync.set({"option4": enabled1});  //set value for option 4 key to true 

   port.postMessage({slangMsg: "t"}); //send message t with key slangMsg

   chrome.storage.sync.get(["option4"],function(result){ 
   
 });

 } 
 else {
  enabled1 = "false";
  chrome.storage.sync.set({"option4": enabled1}); //otherwise sync the word false 

  port.postMessage({slangMsg: "f"}); //send the message f to and associate it with slangMsg

}

};



/**
 * functionality for the fifth button 
 */
function switch5Function(){ //function to set the switch and sync it 
  var enabled1;
  var checkBox = document.getElementById("myonoffswitch5"); //connect to the switch

  if (checkBox.checked){
    enabled1 = "true"; //set the value to true if the checkbox is checked 

   chrome.storage.sync.set({"option5": enabled1}); //sync ttrue to the users google account associated with the option 5 key

   port.postMessage({spellcheckMsg: "t"}); //send message t and associate that with spellcheck msg 

   chrome.storage.sync.get(["option5"],function(result){ 
    
 });

 } 
 else {
  enabled1 = "false"; //otherwise set the value to false 
  chrome.storage.sync.set({"option5": enabled1}); //sync the word false 

  port.postMessage({spellcheckMsg: "f"}); //send f as a message on the port

}

};


/**
 * functionality for the sixth button 
 */
function switch6Function(){ //function to set the switch and sync it 
  var enabled1;
  var checkBox = document.getElementById("myonoffswitch6"); //connect to the switch

  if (checkBox.checked){
    enabled1 = "true"; //assign the var to equal true 

   chrome.storage.sync.set({"option6": enabled1});  //set the sixth option to equal true and sync it to the users google account 

   port.postMessage({descriptionMsg: "t"}); //send t to the port, it is associated with descriptionMsg

   chrome.storage.sync.get(["option6"],function(result){ 
     
 });

 } 
 else {
  enabled1 = "false";
  chrome.storage.sync.set({"option6": enabled1}); //otherwise sync the word false 
  port.postMessage({descriptionMsg: "f"});//pass f as a message, it is associated with decriptionMsg
}
};


//for the first button 
button.addEventListener("click", function(e) { //used for moverment and adding a ripple effect to the button 
  var top = button.offsetTop + e.offsetY;
  var left = button.offsetLeft + e.offsetX;
  Object.assign(ripple.style, { //ripple effect 
    top: top + 'px',
    left: left + 'px' });


  wrapper.classList.toggle('dark'); //grey the button out when it is off 
});


//for button 2 
button2.addEventListener('click', function (e) {
  var top2 = button2.offsetTop + e.offsetY;
  var left2 = button2.offsetLeft + e.offsetX;
  Object.assign(ripple2.style, {
    top2: top2 + 'px',
    left2: left2 + 'px' });

  wrapper2.classList.toggle('dark');
});

//button 3 
button3.addEventListener('click', function (e) {
  var top3 = button3.offsetTop + e.offsetY;
  var left3 = button3.offsetLeft + e.offsetX;

  Object.assign(ripple3.style, {
    top3: top3 + 'px',
    left3: left3 + 'px' });

  wrapper3.classList.toggle('dark');
});

//button 4 
button4.addEventListener('click', function (e) {
  var top4 = button4.offsetTop + e.offsetY;
  var left4 = button4.offsetLeft + e.offsetX;

  Object.assign(ripple4.style, {
    top4: top4 + 'px',
    left4: left4 + 'px' });

  wrapper4.classList.toggle('dark');
});


//button 5
button5.addEventListener('click', function (e) {
  var top5 = button5.offsetTop + e.offsetY;
  var left5 = button5.offsetLeft + e.offsetX;

  Object.assign(ripple5.style, {
    top5: top5 + 'px',
    left5: left5 + 'px' });

  wrapper5.classList.toggle('dark');
});

//button 6 
button6.addEventListener('click', function (e) {
  var top6 = button6.offsetTop + e.offsetY;
  var left6 = button6.offsetLeft + e.offsetX;

  Object.assign(ripple6.style, {
    top6: top6 + 'px',
    left6: left6 + 'px' });

  wrapper6.classList.toggle('dark');
});