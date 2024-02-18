let ship = document.getElementById("ship");
let alien = document.getElementsByClassName("alien");

let x = 48.5;
let y = 39;

ship.style.left = x + "vw";
ship.style.top = y + "vw";

document.onkeydown = function (event) {
  console.count("keydown")
  
  if (event.key === "ArrowLeft" && x > 0) x = x - 1;
  else if (event.key === "ArrowRight" && x < 95) x = x + 1;

  if (event.key === "ArrowUp" && y > 0) y = y - 1;
  else if (event.key === "ArrowDown" && y < 39) y = y + 1;

  ship.style.left = x + "vw";
  ship.style.top = y + "vw";

  var shipRect = ship.getBoundingClientRect();
  var alienRect = alien.getBoundingClientRect();

  console.log(shipRect, alienRect);
};

// if (shipInfo.left < alienInfo.right && shipInfo.right > alienInfo.left && shipInfo.top < alienInfo.bottom && shipInfo.bottom > alienInfo.top) {
//   ship.src = 'images/explosion.png'
// }