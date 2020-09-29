// Here are the five questions I created in an object what will be used in the quiz
const myQuestions = [
  {
    question: "What is the result of the following equation: a = 8 + '8'",
    answers: {
      a: "16",
      b: "null",
      c: "88",
      d: "undefined",
    },
    correctAnswer: "optionC",
  },
  {
    question: "Which of the following is an object?",
    answers: {
      a: "Functions",
      b: "Arrays",
      c: "Dates",
      d: "All of the above",
    },
    correctAnswer: "optionD",
  },
  {
    question: "What is the html tag for writing Javascript?",
    answers: {
      a: "<javascript>",
      b: "<script>",
      c: "<js>",
      d: "<scripted>",
    },
    correctAnswer: "optionB",
  },
  {
    question: "How do you change the text of: <p id='demo'>This is a demonstration.</p> ?",
    answers: {
      a: "document.getElementById('demo').innerHTML = 'Hello World!';",
      b: "document.getElement('p').innerHTML = 'Hello World!';",
      c: "document.getElementName('p').innerHTML = 'Hello World!';",
      d: "#demo.innerHTML = 'Hello World!';",
    },
    correctAnswer: "optionA",
  },
  {
    question: "What HTML attribute do you use to reference an external javascript file?",
    answers: {
      a: "name",
      b: "type",
      c: "href",
      d: "src",
    },
    correctAnswer: "optionD",
  },
];
// gamefield queries that allow for easy removal and creation of new content in the container
let gameField = document.querySelector("#game-field");
let timerValue = document.querySelector("#timer-value");
// initial state html elements
const gameButton = document.querySelector(".startBtn")
let timerText = document.createElement("span");

// initial score state made it global so that it would be easier to manipulate
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

// initial event connected to the start button
gameButton.addEventListener("click", gameTimer);

// function that starts the game timer and stops it when the timer reaches 0
function gameTimer() {
  // set start time
  timerTime = 75;
  // run gameQuestions function to display first question
  gameQuestions();
  timerInterval = setInterval(function () {
    timerTime--;
    // if statement for if user cannot answer the questions in the required amount of time set it to <= so that it will stop game if user make a wrong answer at < 10 seconds
    if (timerTime <= 0) {
      clearInterval(timerInterval);
      // gameEndScreen function call to display final score and ask for initials
      gameEndScreen();
    }
    // display for the top right of the screen
    timerText.textContent = timerTime + " seconds left";
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
  // clear the game-field container to add fresh html elements
  clearGameField();

  // if conditional either stops the game or adds the next question in the list.
  if (i === myQuestions.length) {
    gameEndScreen();
  } else {
    // add new elements to the page
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
// text added is based on the const created above to display the questions the buttons will be handled by the event listeners below
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
  // stops the timer to create a static total score
  clearInterval(timerInterval);
  // awards user with points based on #correct and time left it is possible to get negatives if the user really sucks and this.
  totalScore = correctScore * 5 + timerTime;
  console.log(correctScore);
  console.log(totalScore);
  console.log(timerTime);
// clears the game-field container to start fresh
  clearGameField();
  gameField.appendChild(gameEndTitle);
  gameField.appendChild(scoreReport);
  gameField.appendChild(initialsForm);
  initialsForm.appendChild(initialsFormDivRow);
  initialsFormDivRow.appendChild(initialsFormDivCol1);
  initialsFormDivCol1.appendChild(initialsInput);
  initialsFormDivRow.appendChild(initialsFormDivCol2);
  initialsFormDivCol2.appendChild(initialsBtn);
  // displays high score
  scoreReport.textContent = "You scored " + totalScore + " points!";
}

// variable to store highscores & initials in an array of objects
let highScoreListArrs = [];


// eventlistner for the initialsForm and storage of initials and score to local storage
initialsBtn.addEventListener("click", function(event){
  event.preventDefault();
  
  // object for the user initials/score submission
  let userHighscore = {}
  userHighscore.initials = initialsInput.value
  userHighscore.score = totalScore

// pulling highscore stored in localstorage (if any)
let storedHighScores = JSON.parse(localStorage.getItem("Highscores"));

// conditional to set local storage if there are no stored high scores
if (!storedHighScores) {

  highScoreListArrs.push(userHighscore);
  localStorage.setItem("Highscores", JSON.stringify(highScoreListArrs));
} else {
console.log(storedHighScores);
  storedHighScores.push(userHighscore);

localStorage.setItem("Highscores", JSON.stringify(storedHighScores));
initialsInput.value = "";

}
// turns button into link to highscore page
window.location.href = "./highscore.html"
})


// for (const answer of answerArr){
//   answer.addEventListener("click", event => {
//     event.preventDefault();
//     console.log(answerArr);
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
//   })
// }
// answerArr.addEventListener("click", answerHandler)

// function answerHandler(event) {
//   event.preventDefault();
//   if (event.target.matches("button")) {
//     if (i < myQuestions.length) {
//       if (answerArr[i].getAttribute("option-answer") === myQuestions[i].correctAnswer) {
//         console.log(myQuestions[i].correctAnswer);
//         console.log(answerArr[i].getAttribute("option-answer"));
//         console.log(true);
//         i++;
//         correctScore++
//         gameQuestions();
//       } else {
//         console.log(myQuestions[i].correctAnswer);
//         console.log(answerArr[i].getAttribute("option-answer"));
//         console.log(false);
//         i++;
//         timerTime -= 10;
//         gameQuestions();
//       }
//   }
//   }
// }

// event handlers for the different buttons for the questions. will try to compress this into one handler if I can figure out how.
optionA.addEventListener("click", function () {
    // checks to see if the attribute value is the same and the correct answer. Used to check if the answer is correct 
  if (this.getAttribute("option-answer") === myQuestions[i].correctAnswer) {
      // console.log(myQuestions[i].correctAnswer);
      // console.log(this.getAttribute("option-answer"));
      // console.log(true);
      // adds on to the i variable so that the questions will move to the next question
      i++;
      // gives a point for correct answer
      correctScore++;
      // used for the correctNotification function to display correct
      correctnessBool = true;
      // runs correct notification
      correctNotification();
      // runs next question (or endscreen if no more questions)
      gameQuestions();
    } else {
      // console.log(myQuestions[i].correctAnswer);
      // console.log(this.getAttribute("option-answer"));
      // console.log(false);
      // moves to next question
      i++;
      // removes 10 seconds from timmer as penalty
      timerTime -= 10;
      // used for correctNotification function to display incorrect
      correctnessBool = false;
      // runs incorrect notification
      correctNotification();
      // runs next question (or endscreen if no more questions)
      gameQuestions();
    }
});
// same as option a. again I will try to clean this up later.
optionB.addEventListener("click", function () {
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
});
// same as option a. again I will try to clean this up later.
optionC.addEventListener("click", function () {
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
});
// same as option a. again I will try to clean this up later.
optionD.addEventListener("click", function () {
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
});


// sets initial state of the correct notification to default as incorrect
let correctnessBool = false;
// queries elements for the notification
let correctnessEl = document.querySelector("#correctness");
let correctnessText = document.querySelector("#correctness-text");

// correct and incorrect notification function
function correctNotification() {
  // changes the display from hidden to showing
  correctnessEl.setAttribute("style", "display: inline-block")
  // if statement to display correct or incorrect depending no answer
  if (correctnessBool === true) {
    correctnessText.textContent = "Correct!"
  } else {
  correctnessText.textContent = "Incorrect!"
}
// interval used to display the notification for only one second before hiding it again.
  correctnessInterval = setInterval(function () {
    // sets the notification to display for only 1 second
    let correctnessTime = 1;
    correctnessTime--;
    if (correctnessTime === 0) {
      // clears the interval to ready for the next call of the function
      clearInterval(correctnessInterval);
      // sets the display to none to hide the notification in preparation for the next call
      correctnessEl.setAttribute("style", "display: none");
      correctnessText.textContent = "";
      // resets boolean for next question
      correctnessBool === false;
    }
  }, 1000);
}
