img = ""
status = ""
kitties = []

function preload(){
img = loadImage("appleorange.jpg")

}
 function setup(){
canvas = createCanvas(640, 420)
canvas.center()

objectDetector = ml5.objectDetector('cocossd', modelLoaded)
document.getElementById("status").innerHTML = "Status : detecting objects..."
 }

 function draw(){
image(img, 0 , 0, 640, 420)
/*fill("white")
text("Dog", 45,75)
noFill()
stroke("white")
strokeWeight(3)
rect(30, 60, 450, 350)


fill("white")
text("Cat", 320, 120)
noFill()
stroke("white")
strokeWeight(3)
rect(300, 90, 270, 320)*/

if(status != ""){
for(i = 0; i < kitties.length; i++){
document.getElementById("status").innerHTML = "Status: kitties detected"
fill("blue")
percent = floor(kitties[i].confidence * 100)
text(kitties[i].label + "  " + percent + "%", kitties[i].x,kitties[i].y )
noFill()
stroke("purple")
strokeWeight(3)
rect(kitties[i].x,kitties[i].y, kitties[i].width, kitties[i].height)

}
}

 }
 function modelLoaded(){
     console.log("Kitty Loaded!");
     status = true;
     objectDetector.detect(img, gotResult)
 }

 function gotResult(error, results){
     if(error){
         console.log(error)
     }
     else{
         console.log(results)
         kitties = results
     }
 }