var len = 120;
var angle = 0;
var x;
var y;

function setup() {
    cnv = createCanvas(2 * windowWidth / 3, windowHeight);
    x = width/2;
    y = height - 100;
    //frameRate(1);
    stroke(0);

    treeType = createRadio();
    treeType.option("Stick Diagram", 1);
    treeType.option("2D Fractal", 2);
    treeType.option("Leafy", 3);
    treeType.option("Artistic", 4);
    treeType.option("Realistic", 5);
    treeType.position(2 * windowWidth / 3 + 20, windowHeight / 3);

    slidLabel = createElement('p', 'Tree Type');
    slidLabel.position(2 * windowWidth / 3 + 20, windowHeight / 2);
    w = createSlider(1, 20, 10, 1);
    w.position(2 * windowWidth / 3 + 90, windowHeight / 2 + 19);
}

function draw() {
    background(255);
    switch (treeType.value()) {
        case "1":
            stickTree(x, y, len, angle);
            break;
        case "2":
            widthTree(x, y, len, angle, w.value());
            break;
        case "3":
            greenTree(x, y, len, angle, w.value());
            break;
        case "4":
            artisticTree(x, y, len, angle, w.value());
            break;
        case "5":
            realisticTree(x, y, len, angle, w.value());
            break;
    }
}

function stickTree(x, y, len, angle) {
    if (len > 10) {
        push();
        translate(x, y);
        rotate(angle * Math.PI / 180);
        line(0, 0, 0, -len);
        stickTree(0, -len, len * 0.8, -25);
        stickTree(0, -len, len * 0.8, 25);
        pop();
    }
}

function widthTree(x, y, len, angle, w) {
    if (len > 10) {
        push();
        strokeWeight(w);
        translate(x, y);
        rotate(angle * Math.PI / 180);
        line(0, 0, 0, -len);
        widthTree(0, -len, len * 0.8, -25, w * 0.8);
        widthTree(0, -len, len * 0.8, 25, w * 0.8);
        pop();
    }
}

function greenTree(x, y, len, angle, w) {
    if (len > 10) {
        push();
        strokeWeight(w);
        stroke(0, 150, 0);
        translate(x, y);
        rotate(angle * Math.PI / 180);
        line(0, 0, 0, -len);
        greenTree(0, -len, len * 0.8, angle - 10, w * 0.8);
        greenTree(0, -len, len * 0.8, angle + 10, w * 0.8);
        pop();
    } else {
        push();
        strokeWeight(1);
        stroke(0, 255, 0);
        fill(0, 255, 0);
        arc(x, y, 20, 20, 0, QUARTER_PI);
        pop();
    }
}

function artisticTree(x, y, len, angle, w) {
    if (len > 10) {
        push();
        cnv.drawingContext.shadowBlur = 15;
        cnv.drawingContext.shadowColor = "rgba(0,0,0,0.8)";
        strokeWeight(w);
        stroke(0, 150, 0);
        translate(x, y);
        rotate(angle * Math.PI / 180);
        line(0, 0, 0, -len);
        greenTree(0, -len, len * 0.8, angle - 10, w * 0.8);
        greenTree(0, -len, len * 0.8, angle + 10, w * 0.8);
        pop();
    } else {
        push();
        strokeWeight(1);
        stroke(0, 150, 0);
        fill(0, 255, 0);
        arc(x, y, 20, 20, 0, QUARTER_PI);
        pop();
    }
}

function realisticTree(x, y, len, angle, w) {
    if (len > 5) {
        push();
        cnv.drawingContext.shadowBlur = 15;
        cnv.drawingContext.shadowColor = "rgba(0,0,0,0.8)";
        strokeWeight(w);
        stroke(0, 150, 0);
        translate(x, y);
        rotate(angle * Math.PI / 180);
        if (angle > 0) {
            bezier(0, 0, 10, -len / 2, 10, -len / 2, 0, -len);
        } else {
            bezier(0, 0, -10, -len/2, -10, -len/2, 0, -len);
        }
        realisticTree(0, -len, len * 0.8, angle - 10, w * 0.8);
        realisticTree(0, -len, len * 0.8, angle + 10, w * 0.8);
        pop();
    } else {
        push();
        strokeWeight(1);
        stroke(0, 150, 0);
        fill(0, 255, 0);
        arc(x, y, 20, 20, 0, QUARTER_PI);
        pop();
    }
}