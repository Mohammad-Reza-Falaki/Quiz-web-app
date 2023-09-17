let answers = document.querySelector(".answers");
const nextQues = document.querySelector(".next-ques");
const quesNo = document.querySelector(".no");
const ques = document.querySelector(".question");
const score = document.querySelector(".sc-no");
const finalScore = document.querySelector("h1");
const answerAlert = document.querySelector(".click-alert");
const time = document.querySelector(".time");

const questions = JSON.parse(localStorage.getItem("Questions"));

let timeSecond = 0;
let quesNumber = 0;
let answerClick = 0;

function spentTime() {
    time.innerText = `${timeSecond}s`;
    localStorage.setItem("uTime", `${timeSecond}s`);
    timeSecond += 1;
};
setInterval(spentTime, 1000);

let randomQues = questions[quesNumber].question.text;
let randomQuesAnswers = questions[quesNumber].incorrectAnswers;
let correctAnswer = questions[quesNumber].correctAnswer;
randomQuesAnswers.push(correctAnswer);
randomQuesAnswers.sort();
for (let item of randomQuesAnswers) {
    const p = document.createElement("p");
    p.innerText = item;
    answers.appendChild(p);
};

ques.innerText = randomQues;
score.innerText = '0';

for (let item of answers.children) {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        answerClick += 1;
        if (answerClick === 1) {
            for (item of answers.children) {
                if (item.innerText === correctAnswer) {
                    item.style.backgroundColor = "lightgreen"
                };
            };

            let randA = Math.floor(Math.random() * 3);
            if (item.innerText === correctAnswer) {
                item.style.backgroundColor = "lightgreen";
            };
;
            if (e.target.innerText === correctAnswer) {
                e.target.style.backgroundColor = "lightgreen";
                score.innerText = eval(`${score.innerText} + 10`);
                localStorage.setItem("userScore", score.innerText);
            } else {
                e.target.style.backgroundColor = "red";
            };
        } else {
            answerAlert.style.display = "block";
        }
    });
};

let clickCounts = 1;
nextQues.addEventListener("click", function(e) {
    e.preventDefault();
    answerAlert.style.display = "none";
    clickCounts += 1;
    quesNumber += 1;
    if(clickCounts <= 10) {
        randomQues = questions[quesNumber].question.text;
        randomQuesAnswers = questions[quesNumber].incorrectAnswers;
        correctAnswer = questions[quesNumber].correctAnswer;
        randomQuesAnswers.push(correctAnswer);
        randomQuesAnswers.sort();
        console.log(randomQuesAnswers);
        ques.innerText = randomQues;
        console.log(answers.children)
        console.log(answers.childNodes)
        while (answers.hasChildNodes()) {
            answers.removeChild(answers.firstChild);
        }

        for (let item of randomQuesAnswers) {
            const p1 = document.createElement("p");
            p1.innerText = item;
            answers.appendChild(p1);
        };

        let clickHandler = 0;
        for (let item of answers.children) {
            item.addEventListener("click", function(e) {
                e.preventDefault();
                clickHandler += 1;
                if (clickHandler === 1) {
                    for (item of answers.children) {
                        if (item.innerText === correctAnswer) {
                            item.style.backgroundColor = "lightgreen"
                        }
                    }

                    let randA = Math.floor(Math.random() * 3);
                    if (item.innerText === correctAnswer) {
                        item.style.backgroundColor = "lightgreen";
                    }

                    if (e.target.innerText === correctAnswer) {
                        e.target.style.backgroundColor = "lightgreen";
                        score.innerText = eval(`${score.innerText} + 10`);
                        localStorage.setItem("userScore", score.innerText);
                    } else {
                        e.target.style.backgroundColor = "red";
                    }
                } else {
                    answerAlert.style.display = "block";
                }
            });
        };
        
        quesNo.innerText = eval(`${quesNo.innerText} + 1`);
    } else {
        location.href = "http://127.0.0.1:5500/QuizApp/indexFinal.html";
    };
});

window.addEventListener("unload", function(){
    var count = parseInt(localStorage.getItem('counter') || 0);
  
    localStorage.setItem('counter', ++count)
  }, false);
  
  if (localStorage.getItem('counter') >= 1) {
        location.href = "http://127.0.0.1:5500/QuizApp/indexLoad.html";
  }

localStorage.removeItem("counter"); 