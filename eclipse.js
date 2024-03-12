let ball = document.getElementById("moon");
let speed = 1;
let xPosition = 350;
let reverse = true;
let xMin = 350;
let xMax = 640;

// Funtion to move the ball written in EC6 syntax

const moveMoon = () => {

    reverse ? (
    xPosition += speed,
    ball.style.left = xPosition + "px" 
    ) : (
    xPosition -= speed,
    ball.style.left = xPosition + "px") 
    
    xPosition == xMin || xPosition >= xMax ? 
    (reverse =! reverse) : (null)
        
  } 

setInterval(moveMoon, 25);