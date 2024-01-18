//for counting score of user and computer
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

//for generating random computer choice using line 11 
const generateCompChoice = () => {
          const options = ["rock" , "paper" , "scissors"];
       const randomIdx =   Math.floor( Math.random() * 3); //pre-defined fn that chooses randomly between 0 to the number you want
       return options[randomIdx]; 
          //rock,paper,scissor

};

//if game is draw when user and computer chooses same choice
const drawGame = () => {
         
          msg.innerText = "Game was Draw! . Play again";
          msg.style.backgroundColor = "#081b31";
};

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


//printing the winner status 
const showWinner = (userWin , userChoice , compChoice) => {
          if(userWin){
                    userScore++;
                    userScorePara.innerText = userScore;
                   
                    msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
                    msg.style.backgroundColor = "green";
          }
          else{
                    compScore++;
                    compScorePara.innerText = compScore;
                    
                    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
                    msg.style.backgroundColor = "red";
          }
}

//playing game
const playGame = (userChoice) => {
        
          //generate computer choice 
          const compChoice = generateCompChoice();
         
          if(userChoice === compChoice){
                    //draw condition
                    drawGame();
          }else{
                    let userWin = true;
                    if(userChoice === "rock"){
                              //scissors , paper
                           userWin =    compChoice === "paper" ? false : true ;
                    }
                    else if(userChoice === "paper"){
                             userWin =  compChoice === "scissors" ? false : true;
                    }else{
                             userWin =  compChoice === "rock" ? false : true;
                    }
                    showWinner(userWin ,userChoice, compChoice);//for printing game status
          }

};


//for giving choice to user
choices.forEach((choice) => {
          
          choice.addEventListener("click" , () => {
          const userChoice = choice.getAttribute("id");
          // console.log("choice was clicked" , userChoice);
                    playGame(userChoice);
          });
});
