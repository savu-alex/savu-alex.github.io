let crosses = [];

let canv = document.getElementById('bnrstt');
let img = document.getElementById('bannerimg');


function randomValues() {
    let offset = 60;
    return {
        x: random(0 + offset, getOffset(img).left - offset),
        y: random(0 + offset, window.innerHeight - offset)
    }
}

function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.parent(canv);
    background(0);
    crosses.push(new Cross(width, height, randomValues().x, randomValues().y));
}

function draw() {
    let p = floor(random(1, 55));
    if (!crosses[0].exists() && p == 25) {
        crosses.pop();
        let side = Math.random() < 0.5 ? 0 : getOffset(img).right;
        crosses.push(new Cross(width, height, randomValues().x + side, randomValues().y));
    }
    if (crosses[0].exists())
        crosses[0].render();
    fill(0, 0, 0);
    noStroke();
    rect(getOffset(img).left + 1, getOffset(img).top, 849, window.innerHeight);
}

function mousePressed() {
    console.log(getOffset(img));
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

function getOffset(el) {
    const rct = el.getBoundingClientRect();
    return {
        left: rct.left + window.scrollX,
        top: rct.top + window.scrollY,
        right: rct.right + window.scrollX
    }
}
//https://github.com/processing/p5.js/wiki/Global-and-instance-mode