let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span =document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
} 

function convert(letter){
if (letter == 'r') return "ROCK";
if (letter == 'p') return "PAPER";
if (letter == 's') return "SCISSORS";
}

function Win(user, computer){
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
const smalluser = "user".fontsize(3).sub();
const smallcomp = "comp".fontsize(3).sub();
result_p.innerHTML = convert(user)+ smalluser + " beats " + convert(computer)+ smallcomp + ". You Win!"
document.getElementById(user).classList.add('green-glow');
setTimeout(function(){document.getElementById(user).classList.remove('green-glow')}, 300)
}

function Lose(user, computer){
    computerScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
const smalluser = "user".fontsize(3).sub();
const smallcomp = "comp".fontsize(3).sub();
result_p.innerHTML = convert(user)+ smalluser + " Losses to " + convert(computer)+ smallcomp + ". You Lost!!!"
document.getElementById(user).classList.add('red-glow');
setTimeout(function(){document.getElementById(user).classList.remove('red-glow')}, 300)    
}

function Draw(user, computer){
const smalluser = "user".fontsize(3).sub();
const smallcomp = "comp".fontsize(3).sub();
result_p.innerHTML = convert(user)+ smalluser + " equals to " + convert(computer)+ smallcomp + "... It's a draw!!!"
document.getElementById(user).classList.add('gray-glow');
setTimeout(function(){document.getElementById(user).classList.remove('gray-glow')}, 300) 
}

function game(userChoice){ 
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice)
      {
          case "rs":
          case "pr":
          case "sp":
          Win(userChoice, computerChoice);
          break;
          case "rp":
          case "ps":
          case "sr":
          Lose(userChoice, computerChoice);
          break;
          case "rr":
          case "pp":
          case "ss":
          Draw(userChoice, computerChoice);
          break;
}
}

rock_div.addEventListener('click', function(){
game('r');
})

paper_div.addEventListener('click', function(){
game('p');
})

scissors_div.addEventListener('click', function(){
game('s');
})