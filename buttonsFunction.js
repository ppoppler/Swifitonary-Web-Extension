var wrapper = document.querySelector('.wrapper');
var button = document.querySelector('.button');
var ripple = document.querySelector('.ripple');


//begin part 2 of button
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

//for the first button 
button.addEventListener('click', function (e) {
  var top = button.offsetTop + e.offsetY;
  var left = button.offsetLeft + e.offsetX;

  Object.assign(ripple.style, {
    top: top + 'px',
    left: left + 'px' });


  wrapper.classList.toggle('dark');
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


//button 7
button7.addEventListener('click', function (e) {
  var top7 = button7.offsetTop + e.offsetY;
  var left7 = button7.offsetLeft + e.offsetX;

  Object.assign(ripple7.style, {
    top7: top7 + 'px',
    left7: left7 + 'px' });

  wrapper7.classList.toggle('dark');
});

//button 8
button8.addEventListener('click', function (e) {
  var top8 = button8.offsetTop + e.offsetY;
  var left8 = button8.offsetLeft + e.offsetX;

  Object.assign(ripple8.style, {
    top8: top8 + 'px',
    left8: left8 + 'px' });

  wrapper8.classList.toggle('dark');
});