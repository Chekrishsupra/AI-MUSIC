beliver = "";
astro = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0
function preload() {
    beliver = loadSound("Beliver.mp3")
    astro = loadSound("Austronaut_in_the_ocean.mp3");
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}

function draw() {
    image(video,0,0,500,400);
}

function modelLoaded() {
    console.log("Posenet is active")
}

function gotposes(results) {
    console.log(results);
    leftwristX = results[0].pose.leftWrist.x;
    leftwristY = results[0].pose.leftWrist.y;
    rightwristX = results[0].pose.rightWrist.x;
    rightwristY = results[0].pose.rightWrist.y;
    console.log("Left-wrist X=" + leftwristX + ", left-wrist y=" + leftwristY);
    console.log("Right-wrist X=" + rightwristX + ", Rigth-wrist Y=" + rightwristY);
}