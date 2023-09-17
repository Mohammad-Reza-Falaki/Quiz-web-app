const userName = document.querySelector("input");
const message = document.querySelector("p");
const saveButton = document.querySelector(".save")
const userScore = document.querySelector(".score");
const userTime = document.querySelector(".time");
const playAgainButton = document.querySelector(".play-again");

let userData = [];

const uTime = localStorage.getItem("uTime");
const uScore = JSON.parse(localStorage.getItem("userScore"));
userScore.innerText = `Your score: ${uScore}`;
userTime.innerText = `Time: ${uTime}`;

message.innerText = "Enter your name and press save button, or play again if you want a better score.";

saveButton.addEventListener("click", function(e) {
    e.preventDefault();
    let inputVal = userName.value;
    if (inputVal) {
      localStorage.setItem("Difficulty", "Medium");
      userName.style.border = "solid";
      userName.style.borderColor = "lightgreen";
      userData.push({uName: inputVal, uScore: Number(uScore), uTime: uTime});
      localStorage.setItem("data", JSON.stringify(userData))
      message.innerText = `User's name and score saved!`;
      let currentUserScore = localStorage.getItem("userScore");
      currentUserScore = 0;
      localStorage.setItem("userScore", currentUserScore);
      localStorage.setItem("uTime", "0");
    } else {
      userName.style.border = "solid";
      userName.style.borderColor = "red";
      message.innerText = "Enter your name!";
      userName.addEventListener("keydown", function(e) {
        if (userName.value) {
          userName.style.borderColor = "lightgreen";
          message.innerText = "";
        };
      });
    };
});

playAgainButton.addEventListener("click", function(e){
  // e.preventDefault();
  localStorage.setItem("uTime", "0");
  localStorage.setItem("userScore", "0");
});

window.addEventListener("unload", function(){
    var count = parseInt(localStorage.getItem('counter') || 0);
  
    localStorage.setItem('counter', ++count)
  }, false);
  
  if (localStorage.getItem('counter') >= 1) {

    const localData = JSON.parse(localStorage.getItem("data"));
    userData = [...localData];
    localStorage.removeItem("counter")
  }

localStorage.removeItem("counter"); 