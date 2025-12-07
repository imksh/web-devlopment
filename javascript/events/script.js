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
  if (btn.innerText === "On") {
    document.getElementById("smartbtn").innerText = "Off";
  } else {
    document.getElementById("smartbtn").innerText = "On";
  }
}

const colorBulb = document.getElementById("colorBulb");

document.getElementById("red").addEventListener("mouseenter", () => {
  colorBulb.style.backgroundColor = "red";
  colorBulb.style.color = "white";
});
document.getElementById("red").addEventListener("mouseleave", () => {
  colorBulb.style.backgroundColor = "inherit";
  colorBulb.style.color = "black";
});

document.getElementById("blue").addEventListener("mouseenter", () => {
  colorBulb.style.backgroundColor = "blue";
  colorBulb.style.color = "white";
});
document.getElementById("blue").addEventListener("mouseleave", () => {
  colorBulb.style.backgroundColor = "inherit";
  colorBulb.style.color = "black";
});

document.getElementById("yellow").addEventListener("mouseenter", () => {
  colorBulb.style.backgroundColor = "yellow";
});
document.getElementById("yellow").addEventListener("mouseleave", () => {
  colorBulb.style.backgroundColor = "inherit";
  colorBulb.style.color = "black";
});

document.getElementById("green").addEventListener("mouseenter", () => {
  colorBulb.style.backgroundColor = "green";
  colorBulb.style.color = "white";
});
document.getElementById("green").addEventListener("mouseleave", () => {
  colorBulb.style.backgroundColor = "inherit";
  colorBulb.style.color = "black";
});

document.getElementById("pink").addEventListener("mouseenter", () => {
  colorBulb.style.backgroundColor = "pink";
  colorBulb.style.color = "white";
});
document.getElementById("pink").addEventListener("mouseleave", () => {
  colorBulb.style.backgroundColor = "inherit";
  colorBulb.style.color = "black";
});
document.getElementById("orange").addEventListener("mouseenter", () => {
  colorBulb.style.backgroundColor = "orange";
  colorBulb.style.color = "white";
});
document.getElementById("orange").addEventListener("mouseleave", () => {
  colorBulb.style.backgroundColor = "inherit";
  colorBulb.style.color = "black";
});
