let data;

var newSize;
var newSpacing;
var newWeight;

var myElement = document.getElementById("centerText");
    myElement.style.color = "hsl(240, 100%,50%)";
    myElement.style.fontSize = "48";

let ws = new WebSocket("ws://localhost:1880/ws/receive");

ws.onopen = function(event) {
    console.log(event)
};

ws.onmessage = function(event) {
//mit dem parse Befehl wird der JSON Sring in ein JS Object umgewandelt
    data = JSON.parse(event.data);
    // console.log(event.data);

//fontWeight   
newWeight = map2(data.brightness, 100,500,10,400); 
myElement.style.fontWeight = newWeight; 


// //fontSize
// newSize = map2(data.distance, 7,200,18,48); 
// myElement.style.fontSize = newSize;

//letterspacing
newSpacing= map2(data.roll, -180,180,-10,40); 
myElement.style.letterSpacing = newSpacing;

// console.log(newSize);
}


//mapping inputvalue from one scale to another
function map(input, minIn, maxIn, minOut, maxOut){
let mapVal = (input/(maxIn-minIn))*(maxOut-minOut);
let output = minOut + mapVal;
return output;
}

function map2(input, minIn, maxIn, minOut, maxOut){
    return (input-minIn)*(maxOut-minOut)/(maxIn-minIn)+minOut;
    }