function on() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
}

function off() {
  document.getElementById("bulb").style.backgroundColor = "white";
}

function red() {
  document.getElementById("bulb").style.backgroundColor = "red";
}

function blue() {
  document.getElementById("bulb").style.backgroundColor = "blue";
}

function pink() {
  document.getElementById("bulb").style.backgroundColor = "pink";
}

const userColor = document.getElementById("color");
userColor.addEventListener("change", () => setColor(userColor.value));

function setColor(c) {
  document.getElementById("bulb").style.backgroundColor = c;
}

function smartBulb() {
    const btn = document.getElementById("smartbtn");
    document.getElementById("smartBulb").classList.toggle("on");
    if(btn.innerText === "On"){
        document.getElementById("smartbtn").innerText = "Off";
    }else{
        document.getElementById("smartbtn").innerText = "On";
    }
}