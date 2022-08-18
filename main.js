var nose_x = 0;
var nose_y = 0;

function preload(){
moustache = loadImage("https://i.postimg.cc/2ywMXbvx/download-22-removebg-preview.png");
sunglasses = loadImage("https://i.postimg.cc/HxcTRC9N/download-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized!")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);
    }
}

function draw(){
    image(video, 0, 0, 400, 400);
    image(moustache, nose_x - 60, nose_y - 20, 120, 90);
    image(sunglasses, nose_x - 75, nose_y - 75, 150, 50);
}

function take_snapshot(){
    save("filter_imaage.png");
}


