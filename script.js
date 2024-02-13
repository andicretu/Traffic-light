let time = 0;
let intervalID;

array_colors = ["btn-danger", "btn-warning", "btn-success"];
let colorRange = 0;

let button = document.getElementById('TLContainer');

function changeColor() {
    if (colorRange < 3) {
        button.querySelector('button').className = `btn ${array_colors[colorRange]} btn-lg`;
        ++colorRange;
    } else {
        colorRange = 0; // daca nu resetez variabila asta, butonul ramane incolor dupa terminarea ciclului.
        button.querySelector('button').className = `btn ${array_colors[colorRange]} btn-lg`;
   }
}

window.addEventListener('load', function() {
    changeColor();
    setInterval(changeColor, 10000);
});

window.addEventListener('click', function() {
    changeColor();
});
