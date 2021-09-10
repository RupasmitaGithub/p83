var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";
lineWidth = 1;

var width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e) {
    color = document.getElementById("color").value;
    lineWidth = document.getElementById("width_of_line").value;
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientX - canvas.offsetTop;

}


canvas.addEventListener("touchmove", mytouchmove);

function mytouchmove(e) {
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(lastPositionOfX, lastPositionOfY);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    lastPositionOfX = current_position_of_touch_x;
    lastPositionOfY = current_position_of_touch_y;
}


canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    color = document.getElementById("color").value;
    lineWidth = document.getElementById("width_of_line").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(lastPositionOfX, lastPositionOfY);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    lastPositionOfX = current_position_of_mouse_x;
    lastPositionOfY = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e) {

    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {

    mouseEvent = "mouseleave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}