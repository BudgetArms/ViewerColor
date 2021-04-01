// ==UserScript==
// @name         Krunker Viewer Color Picker
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Enables to change the background color of the viewer
// @author       BudgetArms
// @match        https://krunker.io/viewer.html*
// @grant        none
// ==/UserScript==
! function () {
  setTimeout(Hey, 400);
}();
function Hey() {

    const li = document.createElement("li");
    li.className = "cr function";

    const Div1 = document.createElement("div");

    const Span = document.createElement("span");
    Span.className = "property-name";
    const SpanText = document.createTextNode("Color Picker");

    const Div2 = document.createElement("div");
    Div2.className = "c";

    const ColorPicker = document.createElement("input");
    ColorPicker.type = "color";
    ColorPicker.id = "color";

    const currentDiv = document.querySelector("body > div.dg.ac > div").firstElementChild;

    Span.appendChild(SpanText);
    Div1.appendChild(Span);
    Div2.appendChild(ColorPicker);
    Div1.appendChild(Div2);
    li.appendChild(Div1);
    currentDiv.appendChild(li);


    const currentGifDiv = document.querySelector("body > div.dg.ac > div").firstElementChild;

    const DivGif = document.createElement("div");
    DivGif.id = "Loader";

    const SpanGif = document.createElement("span");
    SpanGif.className = "property-name";
    SpanGif.id= "SpanGif";
    SpanGif.style.width="316px";
    SpanGif.style.heigth="38.24px";

    const SpanTextGif = document.createTextNode("Load Background");
    const Gifli = document.createElement("li");
    Gifli.className = "cr function";

    const input = document.createElement('input');
    input.type = 'file';
    input.style.visibility = 'hidden';
    input.accept = ".png,.jpg,.gif,.svg";
    input.id = "input";

    SpanGif.appendChild(SpanTextGif);
    DivGif.appendChild(SpanGif);
    DivGif.appendChild(input);
    Gifli.appendChild(DivGif);
    currentGifDiv.appendChild(Gifli);

    const currentResetDiv = document.querySelector("body > div.dg.ac > div").firstElementChild;

    const SpanResetDivli = document.createElement('li');
    SpanResetDivli.className = "cr function";

    const ResetDiv = document.createElement('div');

    const ResetSpan = document.createElement("span");
    const ResetSpanText = document.createTextNode("Reset Background");
    ResetSpan.className = "property-name";
    ResetSpan.appendChild(ResetSpanText);
    ResetDiv.appendChild(ResetSpan);


    SpanResetDivli.appendChild(ResetDiv);

    currentResetDiv.appendChild(SpanResetDivli);

    SpanResetDivli.addEventListener("click", function(){
        ResetBackground();
    });

    SpanGif.addEventListener("click", function(){
        Load();
    });
    ColorPicker.addEventListener("change", function(){
        var Hey = ColorPicker.value
        Color(Hey);
    });
};
window.Color = function(Color){
    const container = document.querySelector("#container");
    console.log(Color);
    container.style.background = Color;
}

window.ResetBackground = function(){
    const container = document.querySelector("#container");
    const DefaultColor = "linear-gradient(#7d8fa3, #1b1c1e)";
    container.style.background = DefaultColor;
}
window.Load = function(){
    var input = document.querySelector('#input');
    var ColorPicker = document.querySelector("#color");
    var container = document.querySelector('#container');
    input.click();
    input.addEventListener("change", function(){
        const reader = new FileReader();
        reader.onload = function(){
            var img = new Image();
            if(!reader.result) {
                console.log("No result");
            };
            img.src = reader.result;
            container.style.background = "no-repeat"
            container.style.backgroundImage = `url("${img.src}")`;
            var w = window.innerWidth + 1;
            var h = window.innerHeight + 1;
            container.style.backgroundSize = w + 'px ' + h + 'px';
        }
        try{
        reader.readAsDataURL(input.files[0]);
        }catch{
            console.log("Why didn't you select a file, dumbass?");
        }
    },false);
}

window.Loader = function(a) {
    const ColorPicker = document.querySelector("#color");
    const container = document.querySelector("#container");
    const DefaultColor = "linear-gradient(#7d8fa3, #1b1c1e)";
    var color = "";
    if(a===1){
        color = ColorPicker.value;
        container.style.background = color;
    }
    ColorPicker.onchange = function(){
        Check();
    }
}
