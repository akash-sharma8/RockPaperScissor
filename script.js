let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".img")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice=()=>{
    const option = ["rock","paper","scissors"]
    const randIdx =Math.floor(Math.random()*3);
    return option[randIdx];
};
const drawGame = () =>{
    msg.innerText = "Game was Draw. play again."
    msg.style.backgroundColor = "#081b31"
};

const showWinner= (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`
         msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red"
    }
};
const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false:true;
        }else{
            userWin=compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice)
    }

};


choices.forEach((img) => {
    img.addEventListener("click",() =>{
        const userChoice= img.getAttribute("id");
        playGame(userChoice)
    })
});