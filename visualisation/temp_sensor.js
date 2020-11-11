
let data;

var newWeight = 400;
var newSize;

var myElement = document.getElementById("centerText");
    myElement.style.color = "hsl(240, 100%,50%)";
    myElement.style.fontSize = "18";

let ws = new WebSocket("ws://localhost:1880/ws/receive");

ws.onopen = function(event) {
    console.log(event)
};

ws.onmessage = function(event) {
    data = JSON.parse(event.data);
// //fontWeight   
// newWeight = map(data, 100,700,0,800); 
// myElement.style.fontWeight = newWeight; 

//fontSize
newSize = map2(data, 100,550,-10,100); 
myElement.style.fontSize = newSize;

// //letterspacing
// newSize = map2(data, 100,550,-10,100); 
// myElement.style.letterSpacing = newSize;

// console.log(data);
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