let userScore = 0;
let computerScore= 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div= document.querySelector(".score-board");
const outcome_p = document.querySelector(".outcome > p");
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissor_div = document.getElementById("scissor")

function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissor'];
    const randomComputerChoice = Math.floor(Math.random() * 3);
    return options[randomComputerChoice]; 
}

function win(user,computer){
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore;
    outcome_p.innerHTML= (`Horray! ${user} covers ${computer}. YOU WIN!`);
}

function lose(user,computer){
    computerScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore;
    outcome_p.innerHTML= (`Alas! ${computer} covers ${user}. YOU LOSE!`);
    
}
function draw(){
outcome_p.innerHTML = ("It's a DRAW!!");
}

function game(userChoice) {
    const computerChoice = computerPlay();
    switch (userChoice + computerChoice) {
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
         win(userChoice,computerChoice);
        break;

        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
         lose(userChoice,computerChoice);
        break;

        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
         draw(userChoice,computerChoice);
        break;
        
    }
} 



function main(){ 
   rock_div.addEventListener('click',function(){
    game("Rock");

 })
   paper_div.addEventListener('click',function(){
    game("Paper");
    
  })
   scissor_div.addEventListener('click',function(){
    game("Scissor");    
  })
}
main();

