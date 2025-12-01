
const bg = document.getElementById("bg");
bg.addEventListener("change", () => changebg(bg.value))

const head = document.getElementById("heading");
head.addEventListener("change", () => changehead(head.value))

const paragraph = document.getElementById("para");
paragraph.addEventListener("change", () => changepara(paragraph.value))

function changebg(val) {
    document.getElementById("display").style.backgroundColor = val;
}

function changehead(val) {
    document.getElementById("head").style.color = val;
}

function changepara(val) {
    document.getElementById("paragraph").style.color = val;
}