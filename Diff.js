const diff = document.querySelector(".link-container");
const diffShow = document.querySelector(".show")

localStorage.setItem("Difficulty", "Medium");

for (let item of diff.children) {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        if (e.target) {
            localStorage.setItem("Difficulty", e.target.innerText);
            diffShow.innerText = `Current difficulty: ${e.target.innerText}`;
        };
    });
}; 