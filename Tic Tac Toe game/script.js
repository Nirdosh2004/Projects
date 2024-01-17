let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#resetButton");
let newButton = document.querySelector("#newButton");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

 //playerX , playerO
let turnO = true;


//storing the winner patterns if this happenss it means the player wins the game
const winningPatterns = [
          [0,1,2] ,
          [3,4,5] ,
          [6,7,8],
          [0,3,6] , 
          [1,4,7] ,
          [2,5,8] , 
          [0,4,8] , 
          [2,4,6]
          ];


          //for reset game button 
          const resetGame = () => {
                    turnO = true;
                    enableButtons();
                    msgContainer.classList.add("hide");
          };

 //for giving input like agar first O will come then after that X will come and it goes respectively         
boxes.forEach((box) => {
          box.addEventListener("click" , () => {
                    if(turnO){
                              box.innerText = "O";
                              turnO = false;
                    }
                    else{
                              box.innerText = "X";
                              turnO = true;
                    }
                    box.disabled = true; //if a container is filled a time then it does not allow you to change it 

                    checkWinner();// for printing the winner symbol 
          });
});

// if a container is filled a time then it does not allow you to change i
const disableButtons = () => {
          for(let box of boxes){
                    box.disabled = true;
          }
};

//for enabling when you reset the game or press newgame button
const enableButtons = () => {
          for(let box of boxes){
                    box.disabled = false;
                    box.innerText = "";
          }
};


//for printing the winner symbol
const showWinner = (winner) => {
          msg.innerText = `Congratulations , Winner is ${winner} `;
          msgContainer.classList.remove("hide");
          disableButtons();
};

//for checking winner 
const checkWinner= () => {
          for(let pattern of winningPatterns){  //pattern is variable like int i 
                    let pos1Val = boxes[pattern[0]].innerText;
                    let pos2Val =  boxes[pattern[1]].innerText;
                    let pos3Val = boxes[pattern[2]].innerText;

                    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                              if(pos1Val === pos2Val && pos2Val === pos3Val){
                                     
                                        showWinner(pos1Val);
                              }
                    }
          }
};

//when game is over or you want to reset the game or you want new game 
newButton.addEventListener("click" , resetGame);
resetButton.addEventListener("click" , resetGame);
