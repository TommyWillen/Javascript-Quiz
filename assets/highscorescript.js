const highscoreList = document.querySelector("#highscore-list");

let highScores = JSON.parse(localStorage.getItem("Highscores"));
console.log(highScores);


function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const scoreA = a.score;
    const scoreB = b.score;
 
    return scoreB-scoreA
}
  
  highScores.sort(compare);

for (let hli = 0; hli < 5 && hli < highScores.length; hli++) {
  let highScore = highScores[hli];

  let scoreLi = document.createElement("li");
  scoreLi.textContent = highScore.initials + ":   " + highScore.score;
  scoreLi.setAttribute("data-index", hli);
  highscoreList.appendChild(scoreLi);
}


