const notesContainer = document.querySelector(".notes-container");
const addBtn = document.querySelector("button");
let notes = document.querySelectorAll(".input-box");
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

addBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    img.src = "./images/delete.png"
    inputBox.setAttribute("contenteditable", "true");
    inputBox.classList.add("input-box")
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    updateStorage();
})

notesContainer.addEventListener("click", (e) => { //if you add function(e) dont use arrow
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            };
        })
    }
});

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
    console.log("storage updated");
}

document.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})