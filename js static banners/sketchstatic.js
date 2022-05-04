let crosses = [];

let body = document.getElementById('body');
let botnav = document.getElementById('botnav');
let bannerimg = document.getElementById('bannerimg');

let size1 = body.getBoundingClientRect();
let size2 = botnav.getBoundingClientRect();
let size3 = bannerimg.getBoundingClientRect();

function setup() {
    createCanvas(windowWidth / 3, windowHeight);
    background(0);
    crosses.push(new Cross(width, height, random(width + 50), random(height - 50)));
}

function draw() {
    let p = floor(random(1, 75));
    if (!crosses[0].exists() && p == 25) {
        crosses.pop();
        crosses.push(new Cross(width, height, random(width + 50), random(height - 50)));
    }
    if (crosses[0].exists())
        crosses[0].render();
}

function mousePressed() {
    console.log(size1);
}