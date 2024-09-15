const userVal = document.querySelector("#nums");
// const userVal = parseInt(document.querySelector("#nums").value);
const prev = document.getElementById("previous");
const remain = document.getElementById("remaining");
let random = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#submt");
const lowHigh = document.getElementById("lowHigh");
const startAgain = document.getElementById("result");

const p = document.createElement("p");

let values = [];
let playGame = true;
let numGuess = 1;
console.log(random);

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userVal.value);
    ValidateGame(guess);
  });
}

const ValidateGame = (guess) => {
  if (isNaN(guess)) {
    alert("Please Enter a valid number");
  } else if (guess > 100) {
    alert("Please Enter a valid number");
  } else if (guess < 1) {
    alert("Please Enter a valid number");
  } else {
       values.push(guess);
    if(numGuess === 10){
        cleanup(guess)
        displayMsg(`Game Over !! Random number was ${random}.`)
        endGame()
    }else {
        cleanup(guess)
        checkGuess(guess)
    }
  }

};

const checkGuess = (guess) => {
  if (guess === random) {
      displayMsg(`You took ${numGuess} Guesses to guess number ${random}.`);
        endGame()
    } else if (guess < random) {
        displayMsg(`Number is to low.`);
    } else if(guess > random){
      displayMsg(`Number is to high.`);
    }
};

const displayMsg = (message) => {
    lowHigh.innerHTML = `<h2>${message}</h2>`;
};

const cleanup = (guess) => {
    userVal.value = "";
    prev.innerHTML += `${guess} | `;
    numGuess++;
    remain.innerHTML = `${11 - numGuess}`;
};

const endGame = () => {
    userVal.value = '';
    userVal.setAttribute('disabled', '');
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">New Game</h2>`;
    startAgain.appendChild(p);
    playGame = false;
    newGame();
};

const newGame = () => {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click' , function(e) {
        random = parseInt(Math.random() * 100 + 1);
        values = [];
        numGuess = 1;
        remain.innerHTML = `${11 - numGuess}`;
        prev.innerHTML = '' 
        userVal.removeAttribute('disabled')
        startAgain.removeChild(p)
        lowHigh.innerHTML = ''

        playGame = true
    })
};

