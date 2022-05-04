let crossesright = [];

let canvright = document.getElementById('bnrright');

let bodyright = document.getElementById('body');
let botnavright = document.getElementById('botnav');
let bannerimgright = document.getElementById('bannerimg');
let topnavright = document.getElementById('topnav');

let size1right = bodyright.getBoundingClientRect();
let size2right = botnavright.getBoundingClientRect();
let size3right = bannerimgright.getBoundingClientRect();
let size4right = topnavright.getBoundingClientRect();

function setup() {
    let canvas2 = createCanvas((window.innerWidth - 850) / 2, window.innerHeight);
    canvas2.parent(canvright);
    background(0);
    crossesright.push(new Cross(width, height, random(width + 50), random(height - 50)));
}

function draw() {
    let p = floor(random(1, 75));
    if (!crossesright[0].exists() && p == 25) {
        crossesright.pop();
        crossesright.push(new Cross(width, height, random(width + 50), random(height - 50)));
    }
    if (crossesright[0].exists())
        crossesright[0].render();
}

function mousePressed() {
    console.log('test');
}