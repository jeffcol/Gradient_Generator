
var clipboard = new ClipboardJS('.btn');

let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let copyg = document.querySelector('.copyg');

let whole_doc = document.querySelector('#gradient');

let btn = document.querySelector('.btn');

color1.addEventListener('input', coloring);
color2.addEventListener('input', coloring);

function coloring(e) {

    let right = color1.value;
    let left = color2.value;

    whole_doc.style.background = "linear-gradient(to right," + right + "," + left +")";

    let text1 = whole_doc.style.background;

    copyg.textContent = text1;
    btn.setAttribute("data-clipboard-text", text1);

    alert(text1);
    /*data-clipboard-text*/
    
    

}