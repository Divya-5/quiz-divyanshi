var chalk=require('chalk');
var readlineSync = require("readline-sync");
var score=0;

var highestScores = [
  {
    name: "Divyanshi",
    score: 5,
  },

  {
    name: "Akshat",
    score: 4,
  },
]

function welcomeToGame() {
var userName=readlineSync.question("What's your name? ");
  console.log("Welcome "+ userName + " let see how much you know about Divyanshi");
}

var questions=[{
question: "Where do she live? ",
answer:"Lucknow"
},
{
question: "When is her birthday? ",
answer:"22nd March"
},
{
question:"Her favorite superhero would be? ",
answer:"Shinchan",
},
{
  question: "Where do she work? ",
  answer: "Hashout",
},
{
  question: "Where she did my schooling? ",
  answer: "City Montessori School",
}];

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("right!");
    score++;
  }
  else{
        console.log("wrong!");
  }
      console.log("score "+ score);
      console.log("----------------");
}
function game() {
for(var i=0;i<questions.length;i++){
  var chosenQuestion=questions[i];
  play(chosenQuestion.question,chosenQuestion.answer);
}
}

function displayScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highestScores.map(score => console.log(score.name, " : ", score.score))
}
welcomeToGame();
game();
displayScores();