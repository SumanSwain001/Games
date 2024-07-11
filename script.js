let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user_score");
let compScorePara = document.querySelector("#comp_score");


let genCompChoice = () => {
    let options = ["Rock", "Paper", "Scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

let drawGame = () => {
    msg.innerText = "Game was draw, play again.";
    msg.style.backgroundColor = "black";
};

let showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Congratulations! You win,your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Oops! You lose,${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
let playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    //Generate computer choice
    let compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);
    if (userChoice === compChoice)     //Draw game
        drawGame();
    else {
        let userWin = true;
        if (userChoice === "Rock")         //paper or scissor
        {
            userWin = compChoice === "Paper" ? false : true;
        }
        else if (userChoice === "Paper")    //rock or Scissor
        {
            userWin = compChoice === "Rock" ? true : false;
        }
        else                              //rock or paper
        {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});