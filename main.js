Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML="<img id='image_output' src="+data_uri+">";
    });
}

console.log("ml5 verision: "+ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DOog06fRC/",modellodded);
function modellodded(){
    console.log("modellodded");
}
