# Javascript-Quiz

Explore the github [project repo](https://github.com/TommyWillen/Javascript-Quiz/)

View the [github-pages](https://tommywillen.github.io/Javascript-Quiz/)

## Table of Contents

- [Project Description](#Project-Description)
    - [Page States](#Page-States)
    - [Event Listeners](#event-listeners)
    - [Local Storage](#local-storage)
    - [Highscores Page](#highscores-page)
    - [Video Tutorial](#Video-Tutorial)
- [Installation](#installation)

- [Roadmap](#roadmap)

- [License](#license)

- [Contact Me](#contact-me)

- [Acknowledgements](#acknowledgements)

- [Easter Egg!](#easter-egg!)

## Project Description
![Javascript Quiz Gif](/assets/images-and-gifs/JavaScript-Quiz-Main.gif)

For this project I was tasked with create a quiz game using basic JavaScript. I required to do the following:

- Create a start screen:
    - Must include link to the highscores page
    - Include the title of the game
    - Include a timer (set to 0 initially)
    - Description of the game and how to play
    - Start button that begins the activity
- When the start button is pressed:
    - The game container changes to the first question
- When an answer button was clicked:
    - The game container moves to the next question
    - If the answer was correct/incorrect, an appropriate notifiction is displayed below for a short period of time.
- When the last question is answered or the timer hits 0:
    - The game container switches to the game end state
- At the game end state:
    - The final score is displayed (questions correct * 5 + time left)
    - A form is placed for the player (user) to enter their initials
- When the user enters their initials:
    - Initials and score will be linked together and stored in local storage
    - Switch to highscore page
- When transfered to the highscore page:
    - Display the top 5 highscores
    - Provide a go back button (as well as go back link in navbar) that takes the user to index.html
    - Procide a clear button that clears the highscore list and the stored highscores in local storage

### Page States
![Game Start State](/assets/images-and-gifs/game-start-state.PNG)

The first index.html state is the initial start page. It will then switch to the questions states as the user answers questions, and end at the final score/initials state for the user to store their high score.

The first state in the index.html file was created using html with js a js eventlistener attached to the start button. All of the other states were created using the script.js file. To clear the container with the initial state (game field) I created a clearGameField function that used a while loop to remove all of the child elements in the container. I then used js to create and append the elements to the page.

![Questions State](/assets/images-and-gifs/question-state.PNG)
The questions found in the second state were stored in the const myQuestions array as objects. I then used the eventlistners attached to the buttons to cycle to the next question. After answering a question right or wrong, a hidden container would change from hidden to display inline-block. I used js to change the content to either correct or incorrect if the question was right or not. I also started the timer (set interval) that would either stop after the last question was answered or after it hits zero. At that time it would immediatly move to the game end state.

![End Game State](/assets/images-and-gifs/game-end-state.PNG)
At the game end state, the users score would be displayed as the number of questions correct times five plus the time left. There would also be a spot for the user to write their initials. Upon entering initials, the highscore page would be loaded.

![HighScore State](/assets/images-and-gifs/highscore-page.PNG)
Except for the highscore list, the entire highscore page was made entirely out of html/css because it did not make sense to waste time create an excessive amount of js when html would work just fine.

### Event Listeners

The first eventlistener was the start button. This event listner would call the start timer function that would start the timer and call the game questions function.

The second event listner was attached to the answer buttons for each question. The handler would determine if the button was the correct answer and then run the correctNotification function that would either display correct or incorrect. This handler would increment the correct score function if the answer was correct or decrement the timer by 10seconds if it was incorrect. It would also increment the question array and call the gameQuestion function to display the next question (or move to the end screen if the last question was answered).

The third event listner was attached to the initials form. Once entered it would link the initials and score to an object and store it in local storage (with other high scores if there are any).

The final event listner was attached to the clear button in the highscores page. This handler would remove the children of the highscore list (the high scores), and remove the highscores stored in local storage.

### Local Storage

I used local storage to store the highscores by creating an array of user objects. The user objects contained the users initials and score. I then stringified the array before storing it so that it could be stored. I then used the get method to take the stored information and parced it into an array of objects to be used in the highscores page.

### Highscores Page

One interesting feature in the highscores page that has not been touched on is how the high scores are displayed. First I created a function called compare that compares the scores of the different users to find which is higher. I then added this to the sort method to order the highscore from highest to lowest. I then only displayed the top five scores so that it would limit how many score were shown.

### Video Tutorial

Click the image to view my video feature tutorial:

[![Start screen to link to youtube video](/assets/images-and-gifs/game-start-state.PNG)](https://youtu.be/PKHsV3EKs_Y)

## Installation

Prerequisites\: None

Simply clone it from my repo\:

```
clone git@github.com:TommyWillen/Javascript-Quiz.git
```

## Roadmap

In the future I plan to incorporate jquery to shrink my code.

## License

[License](https://github.com/TommyWillen/Javascript-Quiz/blob/master/LICENSE)

## Contact Me

- [Email](TommyAllen1215@gmail.com)
- [Github Page](https://github.com/TommyWillen)
- [LinkedIn](https://www.linkedin.com/in/tommy-willen-12867b1b3/)

## Acknowledgements

For this project I would like to thank the following individuals\:

- John Young\: For introducing me to the joys of Javascrip, pointing out the importance of scope when declaring variables, and inspiring me to use let and const when possible instead of var.
- Dan Mont-Eton\: For the calm and patient support he provided in understanding my code and "talking me off the ledge" when I wanted to throw my computer at the wall. For also helping me find simple errors/solutions to tasks that I spent hours on.
- Zachary Auerbach for helping me debug my code to get my data to store properly

## Easter Egg!

The initials found in the gif show four initials aside from my own:
- BE: for Bredan Eich the creator of javascript
- JG: for James Gosling the creator of java
- DR: for Dennis Ritchie the creator of C programming language
- NW: for Niklaus Wirth the creator of modula-2

I was inspired to use these initials becuase it was a javascript quiz and the first initials were the creator and the other three were languages that inspired the javascript format/syntax