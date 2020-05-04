
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let copyg = document.querySelector('.copyg');

let whole_doc = document.querySelector('#gradient');

color1.addEventListener('input', coloring);
color2.addEventListener('input', coloring);

function coloring(e) {

    let right = color1.value;
    let left = color2.value;

    whole_doc.style.background = "linear-gradient(to right," + right + "," + left +")";

}