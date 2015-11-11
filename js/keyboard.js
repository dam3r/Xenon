//Keyboard configuration
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var shootPressed = false;
var actionPressed = false;

//P2 keys
var P2rightPressed = false;
var P2leftPressed = false;
var P2upPressed = false;
var P2downPressed = false;
var P2shootPressed = false;
var P2actionPressed = false;

var keyUp = 38;
var keyDown = 40;
var keyLeft = 37;
var keyRight = 39;
var keyShoot = 32;
var keyAction = 17;

var P2keyUp = 87;
var P2keyDown = 83;
var P2keyLeft = 65;
var P2keyRight = 68;
var P2keyShoot = 67;
var P2keyAction = 88;
//---Keyboard configuration

function keyDownHandler(e){
    if(e.keyCode ==  keyRight) {
         rightPressed = true;
         Player.isMoving = true;
    }
    else if(e.keyCode ==  keyLeft) {
         leftPressed = true;
         Player.isMoving = true;
    }
    else if(e.keyCode ==  keyDown) {
         downPressed = true;
         Player.isMoving = true;
    }
    else if(e.keyCode ==  keyUp) {
         upPressed = true;
         Player.isMoving = true;
    }
    else if(e.keyCode ==  keyShoot) {
         shootPressed = true;
    }
    else if(e.keyCode ==  keyAction) {
         actionPressed = true;
    }
    //P2
    if(e.keyCode ==  P2keyRight) {
         P2rightPressed = true;
         Player2.isMoving = true;
    }
    else if(e.keyCode ==  P2keyLeft) {
         P2leftPressed = true;
         Player2.isMoving = true;
    }
    else if(e.keyCode ==  P2keyDown) {
         P2downPressed = true;
         Player2.isMoving = true;
    }
    else if(e.keyCode ==  P2keyUp) {
         P2upPressed = true;
         Player2.isMoving = true;
    }
    else if(e.keyCode ==  P2keyShoot) {
         P2shootPressed = true;
    }
    else if(e.keyCode ==  P2keyAction) {
         P2actionPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode ==  keyRight) {
         rightPressed = false;
         Player.isMoving = false;
    }
    else if(e.keyCode ==  keyLeft) {
         leftPressed = false;
         Player.isMoving = false;
    }
    else if(e.keyCode ==  keyDown) {
         downPressed = false;
         Player.isMoving = false;
    }
    else if(e.keyCode ==  keyUp) {
         upPressed = false;
         Player.isMoving = false;
    }
    else if(e.keyCode ==  keyShoot) {
         shootPressed = false;
    }
    else if(e.keyCode ==  keyAction) {
         actionPressed = false;
    }
    //P2
    if(e.keyCode ==  P2keyRight) {
         P2rightPressed = false;
         Player2.isMoving = false;
    }
    else if(e.keyCode ==  P2keyLeft) {
         P2leftPressed = false;
         Player2.isMoving = false;
    }
    else if(e.keyCode ==  P2keyDown) {
         P2downPressed = false;
         Player2.isMoving = false;
    }
    else if(e.keyCode ==  P2keyUp) {
         P2upPressed = false;
         Player2.isMoving = false;
    }
    else if(e.keyCode ==  P2keyShoot) {
         P2shootPressed = false;
    }
    else if(e.keyCode ==  P2keyAction) {
         P2actionPressed = false;
    }

}