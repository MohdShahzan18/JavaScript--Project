let a = ["rock", "paper", "scissor"];

let user;

const choice = document.querySelector("#choice");
const users = document.getElementById("user");
let userScore = document.getElementById("userScore");
let compScore = document.getElementById("compScore");
let compScores = 0;
let userScores = 0;
const rock = document
  .getElementById("rock")
  .addEventListener("click", function () {
    user = "rock";
    console.log("user choice ", user);
    handleClick();
  });

const paper = document
  .getElementById("paper")
  .addEventListener("click", function () {
    user = "paper";
    console.log("user choice ", user);
    handleClick();
  });

const scissor = document
  .getElementById("scissor")
  .addEventListener("click", function () {
    user = "scissor";
    console.log("user choice ", user);
    handleClick();
  });

const RandomVal = () => {
  let i = Math.floor(Math.random() * a.length);
  return a[i];
};

const Draw = () => {
  choice.innerHTML = "Match is Draw!!";
  choice.style.color = "black";
};

const CompWin = () => {
  choice.innerHTML = "Computer wins";
  choice.style.color = "#ff0000";
  compScores++;
  compScore.innerHTML = compScores;
};

const userWin = () => {
  choice.innerHTML = "User wins";
  choice.style.color = "#3bc14a";
  userScores++;
  userScore.innerHTML = userScores;
};

const handleClick = () => {
  const computer = RandomVal();
  if (user == "paper" && computer == "paper") {
    users.innerHTML = `${computer} vs ${user}`;
    Draw();
  } else if (user == "rock" && computer == "paper") {
    users.innerHTML = `${computer} beats ${user}`;
    CompWin();
  } else if (user == "scissor" && computer == "paper") {
    users.innerHTML = ` ${user} beats ${computer}`;
    userWin();
  } else if (user == "paper" && computer == "rock") {
    users.innerHTML = ` ${user} beats ${computer}`;
    userWin();
  } else if (user == "rock" && computer == "rock") {
    users.innerHTML = `${computer} vs ${user}`;
    Draw();
  } else if (user == "scissor" && computer == "rock") {
    users.innerHTML = ` ${computer} beats ${user}`;
    CompWin();
  } else if (user == "paper" && computer == "scissor") {
    users.innerHTML = ` ${computer} beats ${user}`;
    CompWin();
  } else if (user == "rock" && computer == "scissor") {
    users.innerHTML = ` ${user} beats ${computer}`;
    userWin();
  } else if (user == "scissor" && computer == "scissor") {
    users.innerHTML = `${computer} vs ${user}`;
    Draw();
  }
};
