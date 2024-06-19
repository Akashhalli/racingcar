var bluecar = document.getElementById("bluecar");
var racecar = document.getElementById("racecar");
var result = document.getElementById("result");
const score = document.getElementById("score");
var game = document.getElementById("game");
var output = document.getElementById("output");
var out_score = document.getElementById("out_score");
var cel_sound = document.getElementById("cel_sound");
var end_game = document.getElementById("end_game");
var arrow_click = document.getElementById("arrow_click");

var counter = 0;

bluecar.addEventListener("animationiteration", function () {
    var lanes = [60, 200, 350]; // Lane positions
    var random = lanes[Math.floor(Math.random() * lanes.length)];
    bluecar.style.left = random + "px";
    counter++;
    changeIt(counter);
    if (counter % 10 == 0) {
        cel_sound.play();
    }
});

function changeIt(counter) {
    output.style.display = "block";
    out_score.innerHTML = `Score: ${counter}`;
}

window.addEventListener("keydown", function (r) {
    var racecarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
    if (r.keyCode == "39" && racecarLeft < 350) { // Right arrow key
        racecar.style.left = (racecarLeft + 150) + "px";
        if (counter !== 0) {
            arrow_click.play();
        }
    }
    if (r.keyCode == "37" && racecarLeft > 60) { // Left arrow key
        racecar.style.left = (racecarLeft - 150) + "px";
        if (counter !== 0) {
            arrow_click.play();
        }
    }
});

setInterval(function Gameover() {
    var bluecarTop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"));
    var bluecarLeft = parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"));
    var racecarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
    if (bluecarLeft === racecarLeft && bluecarTop > 390 && bluecarTop < 651) {
        result.style.display = "block";
        game.style.display = "none";
        output.style.display = "none";
        score.innerHTML = `score: ${counter} `;
        end_game.play();
        counter = 0;
    }
}, 10);
