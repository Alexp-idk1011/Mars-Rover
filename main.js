var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

var background_array = ["mars.jpg", "mars1.jpg", "mars2.jpg", "mars3.jpg"]
var random_number = Math.floor(Math.random() * 4);
console.log(random_number);


var rover_height = 90;
var rover_width = 100;

var rover_x = 10;
var rover_y = 10;

background_img = background_array[random_number];
console.log("Background Image =" + background_img);
rover_img = "rover.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);    
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var key_pressed = e.keyCode;
    console.log(key_pressed);
    
    if (key_pressed == '37')  {
        left();
        console.log("left");
    }

    if (key_pressed == '38')  {
        up();
        console.log("up");
    }

    if (key_pressed == '39')  {
        right();
        console.log("right");
    }

    if (key_pressed == '40')  {
        down();
        console.log("down");
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left is pressed, X = " + rover_x + ", Y =" + rover_y);

        uploadBackground();
        uploadRover();
    }

}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right is pressed, X = " + rover_x + ", Y =" + rover_y);

        uploadBackground();
        uploadRover();
    }

}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up is pressed, X = " + rover_x + ", Y =" + rover_y);

        uploadBackground();
        uploadRover();
    }

}

function down() {
    if (rover_y <= 510) {
        rover_y = rover_y + 10;
        console.log("When down is pressed, X = " + rover_x + ", Y =" + rover_y);

        uploadBackground();
        uploadRover();
    }

}