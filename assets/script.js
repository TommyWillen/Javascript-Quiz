let gameField = document.querySelector("#game-field");
let timerValue = document.querySelector("#timer-value");

const gameHead = document.createElement("h3");
const gameDirections = document.createElement("p");
const gameButton = document.createElement("button");
let timerText = document.createElement("span");


gameHead.textContent = "Welcome to Tommy Willen's JavaScript Quiz";
gameDirections.textContent = "Once you press start the timer will begin. You will have 75 seconds to answer as many questions as you can. Every correct answer will add 5 points to your score, while every wrong answer will deduct 10 seconds from the timer. The games ends once either you finish all questions or the timer runs out. Your score will be based on the number of correct answers and how long it took you to finish. You score will be added to the high scores page. You can play multiple times to try and beat your top score!. Good Luck!";
gameButton.textContent = "Start!";
gameButton.setAttribute("class", "startBtn");
gameField.appendChild(gameHead);
gameField.appendChild(gameDirections);
gameField.appendChild(gameButton);

let timerTime = 0;

timerText.setAttribute("class", "timer-text");
timerValue.appendChild(timerText);
timerText.textContent = timerTime + " seconds left";


gameField.addEventListener("click", function(event){
    var element = event.target;
  
    if (element.matches("button") === true) {
      gameStart();
    }
  });

  function gameStart(){
      
  }