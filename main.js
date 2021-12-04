difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(550,550)
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded(){
    console.log('PoseNet Is Initalized!')
}

function gotPoses(result){
    if(results.length > 0)
    {
        console.log(results);

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);

        console.log("leftWristX =" + leftWristX + "rightWristX = " + rightWristX + "difference =" + difference);
    } 
}

function draw(){
    background('#6C91C2');

    document.getElementById("font_size").innerHTML = "Font size of the text will be =" + difference + "px";
    textSize(difference);
    fill('#FFE787');
    text('Peter', 50,400);
}