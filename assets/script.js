// gamefield queries
let gameField = document.querySelector("#game-field");
let timerValue = document.querySelector("#timer-value");
// initial state html elements
const gameHead = document.createElement("h3");
const gameDirections = document.createElement("p");
const gameButton = document.createElement("button");
let timerText = document.createElement("span");

// game questions html elements
let questionText = document.createElement("h3");
let questionOptionList = document.createElement("ul");
let optionALi = document.createElement("li");
let optionBLi = document.createElement("li");
let optionCLi = document.createElement("li");
let optionDLi = document.createElement("li");
let optionA = document.createElement("button");
let optionB = document.createElement("button");
let optionC = document.createElement("button");
let optionD = document.createElement("button");

// game end html elements
const gameEndTitle = document.createElement("h3");
const scoreReport = document.createElement("p");
const initialsForm = document.createElement("form");
const initialsFormDivRow = document.createElement("div");
const initialsFormDivCol1 = document.createElement("div");
const initialsInput = document.createElement("input");
const initialsFormDivCol2 = document.createElement("div");
const initialsBtn = document.createElement("button");

// game end state
let finalScore = 0;
scoreReport.textContent = "You scored " + finalScore + " points!";
gameEndTitle.textContent = "All Done!";
initialsFormDivRow.setAttribute("class", "form-row align-items-center justify-content-center");
initialsFormDivCol1.setAttribute("class", "col-auto");
initialsFormDivCol2.setAttribute("class", "col-auto");
initialsInput.setAttribute("class", "form-control mb-2");
initialsInput.setAttribute("type", "text");
initialsInput.setAttribute("id", "inlineFormInput");
initialsInput.setAttribute("placeholder", "Enter Initials Here");
initialsBtn.setAttribute("type", "submit");
initialsBtn.textContent = "Submit";


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
timerText.setAttribute("class", "timer-text");
timerValue.appendChild(timerText);
timerText.textContent = timerTime + " seconds left";

// used for both the gamequestions and gametimer functions
let gameEnd = false;

gameButton.addEventListener("click", function(event){
    // var element = event.target;
  
    // if (element.matches("button") === true) {
      gameQuestions();
    // }
  });

 

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
    while (gameField.hasChildNodes()) {  
        gameField.removeChild(gameField.firstChild);
      }
    gameField.appendChild(gameEndTitle);
    gameField.appendChild(scoreReport);
    gameField.appendChild(initialsForm);
    initialsForm.appendChild(initialsFormDivRow);
    initialsFormDivRow.appendChild(initialsFormDivCol1);
    initialsFormDivCol1.appendChild(initialsInput);
    initialsFormDivRow.appendChild(initialsFormDivCol2);
    initialsFormDivCol2.appendChild(initialsBtn);
  }

  function gameQuestions() {
    while (gameField.hasChildNodes()) {  
        gameField.removeChild(gameField.firstChild);
      }

    // start timer
    gameTimer();
// create a loop for each question that changes the state
gameField.appendChild(questionText);
gameField.appendChild(questionOptionList);
questionOptionList.appendChild(optionALi);
questionOptionList.appendChild(optionBLi);
questionOptionList.appendChild(optionCLi);
questionOptionList.appendChild(optionDLi);
optionALi.appendChild(optionA);
optionBLi.appendChild(optionB);
optionCLi.appendChild(optionC);
optionDLi.appendChild(optionD);

questionText.textContent = myQuestions[0].question;
optionA.textContent = myQuestions[0].answers.a;
optionB.textContent = myQuestions[0].answers.b;
optionC.textContent = myQuestions[0].answers.c;
optionD.textContent = myQuestions[0].answers.d;
for (let i = 0; i < myQuestions.length; i++) {

}
  }

  const myQuestions = [
    {
      question: "question1 what is your answer?",
      answers: {
        a: "answer is not a",
        b: "answer is totally not b",
        c: "answer is obviously c",
        d: "answer is not d clearly",
      },
      correctAnswer: "c"
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