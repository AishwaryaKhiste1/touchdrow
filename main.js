var mouseEvent="empty";
var last_position_x,last_position_y;

canvas=document.getElementById('myCanvas');

ctx=canvas.getContext("2d");

color="black";
width=1;
canvas.addEventListener("mousedown", mymd );
 function mymd(e){
    mouseEvent="mousedown" ;
 }

 canvas.addEventListener("mouseup", mymu );
 function mymu(e){
    mouseEvent="mouseup" ;
 }

 canvas.addEventListener("mouseleave", myml );
 function myml(e){
    mouseEvent="mouseleave" ;
 }

 canvas.addEventListener("mousemove", mymm );
 function mymm(e){
    
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
         
        console.log ("last_position_of_x,y=");
        console.log ("x="+last_position_x+"y="+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);

        console.log ("current_position_of_x,y=");
        console.log ("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
        ctx.moveTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_x=current_position_of_mouse_x;
    last_position_y=current_position_of_mouse_y;

 }
