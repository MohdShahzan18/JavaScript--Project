let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGbtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let click_count = 0;


const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("Button was clicked");
        
    if(turnO){
        box.style.color = "White";
        box.innerText = "O";

        turnO = false;
    }else {
        box.style.color = "Red";
        box.innerText = "X";
        turnO = true;
    }
    


    
    box.disabled = true;
    checkWinner();
    matchDraw();
}); 

});

const disabledBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
};
const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const resetGame = () => {
    turnO = true;
    click_count = 0;
    enabledBoxes();
    msgContainer.classList.add("hide");
};

    const matchDraw = () => {
        if(click_count === 9){
        msg.innerText = ("Match is Drawn");
        msgContainer.classList.remove("hide");
    }
};



    const showWinner = (winner) => {
    msg.innerText = (`Congratulations Winner is ${winner}`);
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                showWinner(posVal1);
        }
     }
        
    } 
};


newGbtn.addEventListener("click",  resetGame);
resetBtn.addEventListener("click", resetGame);