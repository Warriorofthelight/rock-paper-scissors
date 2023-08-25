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

let result = document.getElementById("resultr");

// Choose weapon

let rockR = rockb.addEventListener("click", function () {
  rock.style.zIndex = "1";
  paper.style.zIndex = "0";
  scissors.style.zIndex = "0";
});

let paperR = paperb.addEventListener("click", function () {
  paper.style.zIndex = "1";
  rock.style.zIndex = "0";
  scissors.style.zIndex = "0";
});

let scissorsR = scissorsb.addEventListener("click", function () {
  scissors.style.zIndex = "1";
  paper.style.zIndex = "0";
  rock.style.zIndex = "0";
});

// 2.They start and the opponent shuffles through 1-3 and choses a random number

// Random value generation
start.addEventListener("click", function () {
  let userC = [scissorsb, rockb, paperb];
  let side2r = [scissorsO, rockO, paperO];
  let randomIndex = Math.floor(Math.random() * side2r.length);
  let value = side2r[randomIndex];

  //   Show correct image
  if (randomIndex == 0) {
    scissorsO.style.zIndex = "1";
    paperO.style.zIndex = "0";
    rockO.style.zIndex = "0";
  } else if (randomIndex == 1) {
    rockO.style.zIndex = "1";
    paperO.style.zIndex = "0";
    scissorsO.style.zIndex = "0";
  } else if (randomIndex == 2) {
    paperO.style.zIndex = "1";
    rockO.style.zIndex = "0";
    scissorsO.style.zIndex = "0";
  }

  //   scissors
  if (userC[0] && value === scissorsO && scissors.style.zIndex == "1") {
    result.innerHTML = "it's a draw";
  } else if (userC[0] && value === rockO && scissors.style.zIndex == "1") {
    result.innerHTML = "you lose";
  } else if (userC[0] && value === paperO && scissors.style.zIndex == "1") {
    result.innerHTML = "you win";
  }

  //   rock
  if (userC[1] && value === rockO && rock.style.zIndex == "1") {
    result.innerHTML = "it's a draw";
  } else if (userC[1] && value === paperO && rock.style.zIndex == "1") {
    result.innerHTML = "you lose";
  } else if (userC[1] && value === scissorsO && rock.style.zIndex == "1") {
    result.innerHTML = "you win";
  }

  //   paper

  //   rock
  if (userC[2] && value === paperO && paper.style.zIndex == "1") {
    result.innerHTML = "it's a draw";
  } else if (userC[2] && value === scissorsO && paper.style.zIndex == "1") {
    result.innerHTML = "you lose";
  } else if (userC[2] && value === rockO && paper.style.zIndex == "1") {
    result.innerHTML = "you win";
  }
});
// 3.A message stating wheter they lost or won is shown
// See who won

// compare two values and see which one won
