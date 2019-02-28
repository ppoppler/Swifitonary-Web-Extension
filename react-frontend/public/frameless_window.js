

window.onfocus = function() { 
  console.log("focus");
  focusTitlebars(true);
}

window.onblur = function() { 
  console.log("blur");
  focusTitlebars(false);
}

window.onresize = function() {
  updateContentStyle();
}

window.onload = function() {

  
  document.getElementById("close-window-button").onclick = function() {
    window.close();
  }
  
  updateContentStyle();
}