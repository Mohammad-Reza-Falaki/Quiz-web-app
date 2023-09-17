const difficultyMode = localStorage.getItem("Difficulty");

const api = `https://the-trivia-api.com/v2/questions?difficulties=${difficultyMode.toLowerCase()}`;

fetch(api)
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("Questions", JSON.stringify(data))
        location.href = "http://127.0.0.1:5500/QuizApp/indexQues.html";
    });

localStorage.removeItem("counter"); 