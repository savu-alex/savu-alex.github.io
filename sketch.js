let crosses = [];
let canvdiv;
let pg;
let newPageSequence = 0;

function choosePage(arg) {
    pg = arg;
    return arg;
}

function setup() {
    canvdiv = createDiv();
    canvdiv.id('animation');
    canvdiv.class('animation');
    let test = document.getElementById('animation');
    test.style.display = "none";
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent(canvdiv);
    background('rgba(1,1,1,0.01)');
}

function draw() {
    if (crosses[0]) {
        crosses[0].render();
        if (crosses[0].exists() == false && newPageSequence == 0) {
            console.log("new page process initiated");
            let url;
            if (pg == 1)
                url = "./tadao.html";
            else if (pg == 2)
                url = "./cladiri.html";
            else if (pg == 3)
                url = "./premii.html";
            location.replace(url);
            newPageSequence = 1;
        }
    }
}

function mousePressed() {
    if (mouseButton === LEFT || mouseButton === CENTER) {
        let test = document.getElementById('animation');
        test.style.display = "block";
        crosses.push(new Cross(height, width, mouseX, mouseY));
    }
}