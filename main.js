beliver = "";
astro = "";

function preload() {
    beliver = loadSound("Beliver.mp3")
    astro = loadSound("Austronaut_in_the_ocean.mp3");
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,500,400)
}