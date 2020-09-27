// separate js file for the highscore to keep code separate from the other file. It also removes errors for eventlistners that do not exist on this page.
// query to the ordered list object that will display the high scores
const highscoreList = document.querySelector("#highscore-list");
// variable that grabs the highscores and initials saved in local storage and parses it into an object
let highScores = JSON.parse(localStorage.getItem("Highscores"));
// console.log(highScores);

// query of the clear button
const clearBtn = document.querySelector("#clear-button")

// compare function used to compare score values and sort them from highest to lowest when used with the sort method
function compare(a, b) {
    // sets the variables to scores from the chosen array
    const scoreA = a.score;
    const scoreB = b.score;
    // compares the new score from the old one to help the sort method determine the order.
    return scoreB-scoreA;
}

//   if statements used to only run if there are highscore to prevent script error.
if (highScores) {

//   sort method uses the compare function to sort the high scores from highest score to lowest score
highScores.sort(compare);

// for loop used to create high score list. The second statement either makes the list the length of the highScores array or 5 (whichever is smaller)
for (let hli = 0; hli < 5 && hli < highScores.length; hli++) {
//   creates variable for each object in array
    let highScore = highScores[hli];
//   creates list item for each stored high score
  let scoreLi = document.createElement("li");
//   text for each high score
  scoreLi.textContent = highScore.initials + ":   " + highScore.score;
// adds the high score to the list
  highscoreList.appendChild(scoreLi);
}
}

// event listener attached to the clear button that runs the clearHighscore handler that clears the high score list.
clearBtn.addEventListener("click", clearHighscore);

// function clears high scores when clear button is clicked
function clearHighscore() {
    while (highscoreList.hasChildNodes()) {
      highscoreList.removeChild(highscoreList.firstChild);
    }
    localStorage.removeItem("Highscores"); 
    return
  }
