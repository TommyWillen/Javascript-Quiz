// gamefield queries
let gameField = document.querySelector("#game-field");
let timerValue = document.querySelector("#timer-value");
// initial state html elements
const gameButton = document.querySelector(".startBtn")
let timerText = document.createElement("span");

// initial score state
let totalScore = 0;

// used for both the gamequestions and gametimer functions
let i = 0;
let correctScore = 0;
let timerInterval;

// script for the initial timer state
let timerTime = 0;
timerText.setAttribute("class", "timer-text");
timerValue.appendChild(timerText);
timerText.textContent = timerTime + " seconds left";

gameButton.addEventListener("click", gameTimer);

// function that starts the game timer and stops it when the timer reaches 0
function gameTimer() {
  timerTime = 40;
  gameQuestions();
  // console.log(timerTime);
  timerInterval = setInterval(function () {
    timerTime--;
    if (timerTime === 0) {
      clearInterval(timerInterval);
      gameEndScreen();
    }
    timerText.textContent = timerTime + " seconds left";
    // console.log(timerTime);
  }, 1000);
}

// This function removes the html child elements to the div element with the id game-field
function clearGameField() {
  while (gameField.hasChildNodes()) {
    gameField.removeChild(gameField.firstChild);
  }
}

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
optionA.setAttribute("class", "option-btn");
optionB.setAttribute("class", "option-btn");
optionC.setAttribute("class", "option-btn");
optionD.setAttribute("class", "option-btn");
optionA.setAttribute("option-answer", "optionA");
optionB.setAttribute("option-answer", "optionB");
optionC.setAttribute("option-answer", "optionC");
optionD.setAttribute("option-answer", "optionD");
let answerArr = document.querySelectorAll(".option-btn");

// this is the function the creates the game elements and modifies them based on event listners attached to the created buttons
function gameQuestions() {
  clearGameField();

  // if conditional either stops the game or adds the next question in the list.
  if (i === myQuestions.length) {
    gameEndScreen();
  } else {
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

    questionText.textContent = myQuestions[i].question;
    optionA.textContent = myQuestions[i].answers.a;
    optionB.textContent = myQuestions[i].answers.b;
    optionC.textContent = myQuestions[i].answers.c;
    optionD.textContent = myQuestions[i].answers.d;
  }
}

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
gameEndTitle.textContent = "All Done!";
initialsFormDivRow.setAttribute(
  "class",
  "form-row align-items-center justify-content-center"
);
initialsFormDivCol1.setAttribute("class", "col-auto");
initialsFormDivCol2.setAttribute("class", "col-auto");
initialsInput.setAttribute("class", "form-control mb-2");
initialsInput.setAttribute("type", "text");
initialsInput.setAttribute("id", "initialsFormInput");
initialsInput.setAttribute("placeholder", "Enter Initials Here");
initialsBtn.setAttribute("type", "submit");
initialsBtn.textContent = "Submit";

// This function changes the screen to the end game state
function gameEndScreen() {
  clearInterval(timerInterval);
  totalScore = correctScore * 5 + timerTime;
  console.log(correctScore);
  console.log(totalScore);
  console.log(timerTime);

  clearGameField();
  gameField.appendChild(gameEndTitle);
  gameField.appendChild(scoreReport);
  gameField.appendChild(initialsForm);
  initialsForm.appendChild(initialsFormDivRow);
  initialsFormDivRow.appendChild(initialsFormDivCol1);
  initialsFormDivCol1.appendChild(initialsInput);
  initialsFormDivRow.appendChild(initialsFormDivCol2);
  initialsFormDivCol2.appendChild(initialsBtn);
  scoreReport.textContent = "You scored " + totalScore + " points!";
  if (highScoreListArrs !== null) {
    localStorage.getItem("Highscores");
  }
  // localStorage.setItem("savedTotalScore", totalScore);
}

let highScoreList = document.querySelector("#highscore-list")
var highScoreListArrs = [];
// let storedHighScores = JSON.parse(localStorage.getItem("Highscores"));
// highScoreListArrs.push(storedHighScores);
// if (storedHighScores !== undefined || storedHighScores !== null) {
//   highScoreListArrs.push(storedHighScores);
// } else {
//   highScoreListArrs = [];
// }

// eventlistner for the initialsForm
initialsBtn.addEventListener("click", function(event){
  event.preventDefault();
  
  // variable for the user initials/score submission
  let userHighscore = {}
  userHighscore.initials = initialsInput.value
  userHighscore.score = totalScore
  // console.log(userHighscore);
  // console.log(totalScore);
  // userHighscore.initials = savedUserInitials;

// validate initials entered
// if (userHighscore.initials === "" /*|| userHighscore.initials.length <= 1 || userHighscore >= 4*/) {
//   alert("You must enter initials between 2-4 characters")
//   return;
// }
var storedHighScores = JSON.parse(localStorage.getItem("Highscores"));
console.log("storedHighScores is " + storedHighScores);
// highScoreListArrs = storedHighScores;
// highScoreListArrs.push(userHighscore);
if (!storedHighScores) {
  console.log(userHighscore);
  console.log(highScoreListArrs);
  highScoreListArrs.push(userHighscore);
  localStorage.setItem("Highscores", JSON.stringify(highScoreListArrs));
} else {
console.log(storedHighScores);
  storedHighScores.push(userHighscore);

localStorage.setItem("Highscores", JSON.stringify(storedHighScores));
initialsInput.value = "";
// console.log(highScoreListArrs);
// storeHighScores();
}
// window.location.href = "./highscore.html"
})

function storeHighScores() {
  localStorage.setItem("Highscores", JSON.stringify(highScoreListArrs));
}

// questionOptionList.addEventListener("click", answerHandler)

// function answerHandler(event) {
//   event.preventDefault();
//   if (event.target.matches("button")) {
//     if (i < myQuestions.length) {
//       if (this.getAttribute("option-answer") === myQuestions[i].correctAnswer) {
//         console.log(myQuestions[i].correctAnswer);
//         console.log(this.getAttribute("option-answer"));
//         console.log(true);
//         i++;
//         correctScore++
//         gameQuestions();
//       } else {
//         console.log(myQuestions[i].correctAnswer);
//         console.log(this.getAttribute("option-answer"));
//         console.log(false);
//         i++;
//         timerTime -= 10;
//         gameQuestions();
//       }
//   }
//   }
// }

optionA.addEventListener("click", function () {
  if (i < myQuestions.length) {
    if (this.getAttribute("option-answer") === myQuestions[i].correctAnswer) {
      console.log(myQuestions[i].correctAnswer);
      console.log(this.getAttribute("option-answer"));
      console.log(true);
      i++;
      correctScore++;
      correctnessBool = true;
      correctNotification();
      gameQuestions();
    } else {
      console.log(myQuestions[i].correctAnswer);
      console.log(this.getAttribute("option-answer"));
      console.log(false);
      i++;
      timerTime -= 10;
      correctnessBool = false;
      correctNotification();
      gameQuestions();
    }
  }
});

optionB.addEventListener("click", function () {
  if (i < myQuestions.length) {
    if (this.getAttribute("option-answer") === myQuestions[i].correctAnswer) {
      console.log(myQuestions[i].correctAnswer);
      console.log(this.getAttribute("option-answer"));
      console.log(true);
      i++;
      correctScore++;
      correctnessBool = true;
      correctNotification();
      gameQuestions();
    } else {
      console.log(myQuestions[i].correctAnswer);
      console.log(this.getAttribute("option-answer"));
      console.log(false);
      i++;
      timerTime -= 10;
      correctnessBool = false
      correctNotification();
      gameQuestions();
    }
  }
});

optionC.addEventListener("click", function () {
  if (i < myQuestions.length) {
    if (this.getAttribute("option-answer") === myQuestions[i].correctAnswer) {
      console.log(myQuestions[i].correctAnswer);
      console.log(this.getAttribute("option-answer"));
      console.log(true);
      i++;
      correctScore++;
      correctnessBool = true;
      correctNotification();
      gameQuestions();
    } else {
      console.log(myQuestions[i].correctAnswer);
      console.log(this.getAttribute("option-answer"));
      console.log(false);
      i++;
      timerTime -= 10;
      correctnessBool = false;
      correctNotification();
      gameQuestions();
    }
  }
});

optionD.addEventListener("click", function () {
  if (i < myQuestions.length) {
    if (this.getAttribute("option-answer") === myQuestions[i].correctAnswer) {
      console.log(myQuestions[i].correctAnswer);
      console.log(this.getAttribute("option-answer"));
      console.log(true);
      i++;
      correctScore++;
      correctnessBool = true;
      correctNotification();
      gameQuestions();
    } else {
      console.log(myQuestions[i].correctAnswer);
      console.log(this.getAttribute("option-answer"));
      console.log(false);
      i++;
      timerTime -= 10;
      correctnessBool = false;
      correctNotification();
      gameQuestions();
    }
  }
});

const myQuestions = [
  {
    question: "question1 what is your answer?",
    answers: {
      a: "answer is not a",
      b: "answer is totally not b",
      c: "answer is obviously c",
      d: "answer is not d clearly",
    },
    correctAnswer: "optionA",
  },
  {
    question: "question2",
    answers: {
      a: "ans a",
      b: "ans b",
      c: "ans c",
      d: "ans d",
    },
    correctAnswer: "optionA",
  },
  {
    question: "question3",
    answers: {
      a: "ans a",
      b: "ans b",
      c: "ans c",
      d: "ans d",
    },
    correctAnswer: "optionA",
  },
  {
    question: "question4",
    answers: {
      a: "ans a",
      b: "ans b",
      c: "ans c",
      d: "ans d",
    },
    correctAnswer: "optionA",
  },
  {
    question: "question5",
    answers: {
      a: "ans a",
      b: "ans b",
      c: "ans c",
      d: "ans d",
    },
    correctAnswer: "optionA",
  },
];

let correctnessBool = false;
let correctnessEl = document.querySelector("#correctness");
let correctnessText = document.querySelector("#correctness-text");

// correct and incorrect notification function
function correctNotification() {
  correctnessEl.setAttribute("style", "display: inline-block")
  if (correctnessBool === true) {
    correctnessText.textContent = "Correct!"
  } else {
  correctnessText.textContent = "Incorrect!"
}
  correctnessInterval = setInterval(function () {
    let correctnessTime = 1;
    correctnessTime--;
    if (correctnessTime === 0) {
      clearInterval(correctnessInterval);
      correctnessEl.setAttribute("style", "display: none");
      correctnessText.textContent = "";
      correctnessBool === false;
    }
  }, 1000);
}
