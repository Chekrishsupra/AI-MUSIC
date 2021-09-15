beliver = "";
astro = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
leftwristscore  = 0;
song1stat = "";
song2stat = "";
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
    fill("#fc1303");
    stroke("#fc1303");
    song1stat = beliver.isPlaying();
    song2stat = astro.isPlaying();
    if(leftwristscore>0.2) {
        circle(leftwristX,leftwristY,20);
        beliver.stop();
        if(song2stat == false) {
            astro.play();
            document.getElementById("song_display").innerHTML = "Song: Astronauts in the ocean";
        }
    }
}

function modelLoaded() {
    console.log("Posenet is active")
}

function gotposes(results) {
    if(results.length>0) {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("Left-wrist X=" + leftwristX + ", left-wrist y=" + leftwristY);
        console.log("Right-wrist X=" + rightwristX + ", Rigth-wrist Y=" + rightwristY);
        leftwristscore  = results[0].pose.keypoints[9].score;  
    }
}