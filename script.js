let time = 0;
let intervalID;

array_colors = ["btn-danger", "btn-warning", "btn-success"];
let colorRange = 0;

let button = document.getElementById('TLContainer');
button.innerHTML  = `
<div class="d-grid gap-2">
  <button type="button" class="btn ${array_colors[colorRange]} btn-lg">Click me</button>
</div>
<br>`;

function changeColor() {
   if (colorRange < 3) {
    button.querySelector('button').className = `btn ${array_colors[colorRange]} btn-lg`;
    ++colorRange
   } else {
    colorRange = 0;
    clearInterval(intervalID);
    runTime();
    button.querySelector('button').className = `btn ${array_colors[colorRange]} btn-lg`;
   }
}

function increaseTime() {
    time += 1;
    let seconds = Math.floor(time % 1000 / 10)
}
function runTime() {
   intervalID = setInterval(increaseTime, 100)
}
window.addEventListener('load', function() {
    runTime();
    changeColor();
    setInterval(changeColor, 10000);
});

window.addEventListener('click', function() {
    changeColor();
});
