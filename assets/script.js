// gamefield queries
let gameField = document.querySelector("#game-field");
let timerValue = document.querySelector("#timer-value");
// initial state queries
const gameHead = document.createElement("h3");
const gameDirections = document.createElement("p");
const gameButton = document.createElement("button");
let timerText = document.createElement("span");
// game end queries
const gameEndTitle = document.createElement("h3");
gameEndTitle.textContent = "Game Over!";



const gameLeaderBoardTitle = document.createElement("h4");
gameLeaderBoardTitle.textContent = "High Scores";
const HighscoreList = document.createElement("ol");


// script for the initial state for the game.
gameHead.textContent = "Welcome to Tommy Willen's JavaScript Quiz";
gameDirections.textContent = "Once you press start the timer will begin. You will have 75 seconds to answer as many questions as you can. Every correct answer will add 5 points to your score, while every wrong answer will deduct 10 seconds from the timer. The games ends once either you finish all questions or the timer runs out. Your score will be based on the number of correct answers and how long it took you to finish. You score will be added to the high scores page. You can play multiple times to try and beat your top score!. Good Luck!";
gameButton.textContent = "Start!";
gameButton.setAttribute("class", "startBtn");
gameField.appendChild(gameHead);
gameField.appendChild(gameDirections);
gameField.appendChild(gameButton);


// script for the initial timer state
let timerTime = 0;
console.log(gameEnd);
timerText.setAttribute("class", "timer-text");
timerValue.appendChild(timerText);
timerText.textContent = timerTime + " seconds left";

let gameEnd = false;

gameField.addEventListener("click", function(event){
    var element = event.target;
  
    if (element.matches("button") === true) {
      gameFieldClear();
    }
  });

  function gameFieldClear(){
    while (gameField.hasChildNodes()) {  
        gameField.removeChild(gameField.firstChild);
      }
    //   if (gameEnd === true) {
    //       gameEndScreen();
    //   } else {
      gameQuestions();
    //   }
  }

  function gameTimer() {
    timerTime = 10;
    // console.log(timerTime);  
    let timerInterval = setInterval(function(){
        timerTime--;
        if (timerTime === 0 || gameEnd === true){
            clearInterval(timerInterval);
            gameEndScreen();
        }
        timerText.textContent = timerTime + " seconds left";
        // console.log(timerTime);
      }, 1000)
  }

  function gameEndScreen() {
    
    gameField.appendChild(gameEndTitle);
  }

  function gameQuestions() {
// start timer
    gameTimer();
// create a loop for each question that changes the state

for (let i = 0; i < myQuestions.length; i++) {

}
  }

  const myQuestions = [
    {
      question: "question1",
      answers: {
        a: "",
        b: "",
        c: "",
        d: "",
      },
      correctAnswer: ""
    },
    {
      question: "question2",
      answers: {
        a: "",
        b: "",
        c: "",
        d: "",
      },
      correctAnswer: ""
    },
    {
      question: "question3",
      answers: {
        a: "",
        b: "",
        c: "",
        d: ""
      },
      correctAnswer: ""
    },
    {
        question: "question4",
        answers: {
          a: "",
          b: "",
          c: "",
          d: ""
        },
        correctAnswer: ""
      },
      {
        question: "question5",
        answers: {
          a: "",
          b: "",
          c: "",
          d: ""
        },
        correctAnswer: ""
      }
  ];