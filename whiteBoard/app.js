window.addEventListener("load", ()=> {
const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');


//Resizing
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// context.strokeStyle = "red"; //this line has to be before the stroke and fill
// context.strokeRect(100,100,100,100);
// //x: number, y: number, w: number, h: number
// context.fillRect(100,100,100,100);

 //--------draw a shape------
// context.beginPath();
// context.moveTo(100,100); //start
// context.lineTo(200,100); //end
// context.lineTo(200,150);//down
// context.closePath(); //connect the line together to form a shape
// context.stroke(); //draw out the stroke


//variable
let painting = false;

function startPosition(e){
    painting = true;
    draw(e);
}

function endPosition(){
    painting = false;
    context.beginPath(); //after finish, reset the path, allow user to draw new shape
}

function draw(e){
    if(!painting) return; //if the mouse doesn't click, return nothing ==> draw nothing
    context.lineWidth = 10;
    context.lineCap = "round"; //a circle

    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
}
//Event Listerner on mousemove
canvas.addEventListener("mousedown", startPosition); //begin to draw
canvas.addEventListener("mouseup", endPosition); //stop the drawing
canvas.addEventListener("mousemove", draw); //stop the drawing



});