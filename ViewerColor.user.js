// ==UserScript==
// @name         Krunker Viewer Color Picker
// @namespace    No at the moment
// @version      1.0
// @description  Enables to change the background color of the viewer
// @author       BudgetArms
// @match        https://krunker.io/viewer.html*
// @grant        none
// ==/UserScript==

! function () {
  setTimeout(Hey, 10);
}();

function Hey() {

//   var DivGif = document.createElement("div");

//   var SpanGif = document.createElement("span");
//   SpanGif.className = "property-name";
//   var SpanTextGif = document.createTextNode("Load Gif");


  var li = document.createElement("li");
  var Div1 = document.createElement("div");

  var Span = document.createElement("span");
  Span.className = "property-name";
  var SpanText = document.createTextNode("Color Picker");

  var Div2 = document.createElement("div");
  Div2.className = "c";

  var ColorPicker = document.createElement("input");
  ColorPicker.type = "color";
  ColorPicker.id = "COLOR";

  var Input = document.createElement("input");
  Input.type = "checkbox";
  Input.id = "Checkbox";

  Span.appendChild(SpanText);
  Div1.appendChild(Span);
  Div2.appendChild(ColorPicker);
  Div2.appendChild(Input);
  Div1.appendChild(Div2);
  li.appendChild(Div1);

  var currentDiv = document.querySelector("body > div.dg.ac > div").firstElementChild;

  currentDiv.appendChild(li);

  console.dir(currentDiv);

  Check();
};

 window.Check = function(){
     var ColorPicker = document.querySelector("#COLOR");
     var Button = document.querySelector("#Checkbox");
     var container = document.querySelector("#container");

     var DefaultColor = "linear-gradient(#7d8fa3, #1b1c1e)";

     if(ColorPicker.value != undefined && Button.checked === true){
         console.log('The ColorPicker is defined' + ' and ' + 'The Button is checked');
         Loader(1);
         console.log(ColorPicker.value);
     }else if(ColorPicker.value != undefined && Button.checked === false){
         console.log('ColorPicker is defined' + ' and ' + 'The Button is not checked');
         Loader(2);
         console.log(ColorPicker.value);
     }else if(ColorPicker.value === undefined && Button.checked === true){
         console.log('ColorPicker is undefined' + ' and ' + 'The Button is checked');
         Loader(3);
         console.log(ColorPicker.value);
     }else if(ColorPicker.value === undefined && Button.checked === false){
         console.log('ColorPicker is undefined' + ' and ' + 'The Button is not checked');
         Loader(4);
         console.log(ColorPicker.value);
     }

}
 window.Loader = function(a) {
     var ColorPicker = document.querySelector("#COLOR");
     var Button = document.querySelector("#Checkbox");
     var container = document.querySelector("#container");

     var DefaultColor = "linear-gradient(#7d8fa3, #1b1c1e)";
     var color = "";

     if(a===1){
         color = ColorPicker.value;
         container.style.background = color;
     }
     if(a===2){
         color = ColorPicker.value;
         container.style.backgroundImage = DefaultColor;
     }
     if(a===3){
         //color = ColorPicker.value;
         container.style.backgroundImage = DefaultColor;
     }
     if(a===4){
         //color = ColorPicker.value;
         container.style.backgroundImage = DefaultColor;
     }
     ColorPicker.onchange = function(){
         Check();
     }
     Button.onchange = function(){
         Check();
     }
 }
