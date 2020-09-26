const highscoreList = document.querySelector("#highscore-list");

let highScores = JSON.parse(localStorage.getItem("Highscores"));
console.log(highScores);


// function compare(a, b) {
//     // Use toUpperCase() to ignore character casing
//     const scoreA = a.score;
//     const scoreB = b.score;
  
//     let comparison = 0;
//     if (scoreA > scoreB) {
//       comparison = 1;
//     } else if (scoreA < scoreB) {
//       comparison = -1;
//     }
//     return comparison;
//   }
  
//   highScore.sort(compare);

for (var hli = 0; hli < highScores.length; hli++) {
  var highScore = highScores[hli];

  var scoreLi = document.createElement("li");
  scoreLi.textContent = highScore.initials + ":   " + highScore.score;
  scoreLi.setAttribute("data-index", hli);
  highscoreList.appendChild(scoreLi);
}


