let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
//const reset = document.querySelector("#reset");


//Draw func.
const drawGame = () => {
  msg.innerText = "Draw!!";
  msg.style.backgroundColor = "#3E92CC"
};


//ShowWin func.
const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin){
   userScore++;
   userScorePara.innerText = userScore;
   msg.innerText =`You win! Your ${userChoice} beats ${compChoice}`;
   msg.style.backgroundColor = "Green";
  }else {
   compScore++;
   compScorePara.innerText = compScore;
   msg.innerText = `You lost. ${compChoice} beats ${userChoice}`;
   msg.style.backgroundColor = "Red";
  }
};

const resetScore = () => {
     userScore = 0 ;
     compScore = 0;
     userScorePara.innerText = userScore;
     compScorePara.innerText = compScore;
     msg.innerText = "play your move";
     msg.style.backgroundColor="#3E92CC "
}

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if(userChoice === compChoice){
    drawGame();
  }else {
    let userWin = true;
    if(userChoice === "rock"){
      //choices for comp scissor , paper
     userWin = compChoice === "paper" ? false : true; 
    }else if(userChoice === "paper"){
      //choices for comp scissor , rock
        userWin = compChoice === "scissor" ? false : true;
    }else {
      //choices for comp rock , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
};


const genCompChoice = () => {
  const option  = ["rock","paper","scissor"];
  const rindx = Math.floor(Math.random()*3);
  return option[rindx];
};


choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    genCompChoice();
    });
   
});


reset.addEventListener("click" , resetScore);