let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.strokeStyle = "red";

let gradient = context.createLinearGradient(0,0,0,200);
gradient.addColorStop(0, "blue");
gradient.addColorStop(.5 , "red");

context.fillStyle = gradient;
context.fillRect(10,10,100,100);
context.strokeRect(10,10,100,100);