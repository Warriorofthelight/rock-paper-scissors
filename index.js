// 1.The user choses which weapon tehy want

// BTNS
let rockb = document.getElementById("rockb");

let paperb = document.getElementById("paperb");

let scissorsb = document.getElementById("scissorsb");

let start = document.getElementById("start");

// images

let rock = document.getElementById("rock");

let paper = document.getElementById("paper");

let scissors = document.getElementById("scissors");

let rockO = document.getElementById("rockO");

let paperO = document.getElementById("paperO");

let scissorsO = document.getElementById("scissorsO");

// Choose weapon

rockb.addEventListener("click", function () {
  rock.style.zIndex = "1";
  paper.style.zIndex = "0";
  scissors.style.zIndex = "0";
});

paperb.addEventListener("click", function () {
  paper.style.zIndex = "1";
  rock.style.zIndex = "0";
  scissors.style.zIndex = "0";
});

scissorsb.addEventListener("click", function () {
  scissors.style.zIndex = "1";
  paper.style.zIndex = "0";
  rock.style.zIndex = "0";
});

// 2.They start and the opponent shuffles through 1-3 and choses a random number

// 3.A message stating wheter they lost or won is shown
