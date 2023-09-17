const container = document.querySelector(".container");
const alert = document.querySelector(".alert");

let data = JSON.parse(localStorage.getItem("data"));

function sort(a, b) {
    return a.uScore - b.uScore;
};

if (!data) {
    console.log("empty data!");
    const message = document.createElement("p");
    message.innerText = "Play the game to see the scores!";
    alert.appendChild(message);
} else {
    data.sort(sort);
    data.reverse();
};

for (let i=0; i<data.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="score-container">
        <div class="info-container">
            <p class="rank">${i+1}</p>
            <p class="name">${data[i].uName}</p>
        </div>
        <div class="right-side">
            <p class="time-count">${data[i].uTime}</p>
            <p class="score-count">${data[i].uScore}</p>
        </div>
    </div>
    `;
    container.appendChild(div);
}; 

