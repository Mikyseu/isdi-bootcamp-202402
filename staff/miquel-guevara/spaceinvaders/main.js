let ship = document.getElementById("ship");
let alien = document.getElementsByClassName("alien");

let x = 48.5;
let y = 65;

ship.style.left = x + "vw";
ship.style.top = y + "vw";

document.onkeydown = function (event) {
  if (event.key === "ArrowLeft" && x > 31) x = x - 1;
  else if (event.key === "ArrowRight" && x < 66) x = x + 1;

  if (event.key === "ArrowUp" && y > 44) y = y - 1;
  else if (event.key === "ArrowDown" && y < 65) y = y + 1;

  ship.style.left = x + "vw";
  ship.style.top = y + "vw";

  var shipRect = ship.getBoundingClientRect();
  var alienRect = alien.getBoundingClientRect();

  console.log(shipRect, alienRect);
};
