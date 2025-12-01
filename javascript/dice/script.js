let score1 = 0;
let score2 = 0;
let audio = new Audio("./_src/dice.mp3");
let button1 = new Audio("./_src/button.mp3");
let succ = new Audio("./_src/sucess.mp3");
let sweep = new Audio("./_src/clear.mp3");
let player1Name="Player 1";
let player2Name="Player 2";

function generate() {
  return Math.floor(Math.random() * 6) + 1;
}

function btn1() {
  const n = generate();
  if (n !== 6) {
    score1 = score1 + n;
  }
  let sc = document.getElementById("score1");
  const img = document.getElementById("img1");
  img.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    {
      duration: 200,
      easing: "ease-in-out",
    }
  );
  audio.play();

  if (n == 1) {
    img.src = "./_src/one.png";
  } else if (n == 2) {
    img.src = "./_src/two.png";
  } else if (n == 3) {
    img.src = "./_src/three.png";
  } else if (n == 4) {
    img.src = "./_src/four.png";
  } else if (n == 5) {
    img.src = "./_src/five.png";
  } else if (n == 6) {
    img.src = "./_src/six.png";
  }
  sc.innerText = score1;
  document.getElementById("btn2").disabled = false;
  document.getElementById("btn1").disabled = true;
  if (n < 6) {
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = true;
    document.getElementById("box1").style.backgroundColor =
      "rgb(150, 243, 150)";
    document.getElementById("box2").style.backgroundColor = "inherit";
  } else {
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn1").disabled = true;
    document.getElementById("box2").style.backgroundColor =
      "rgb(150, 243, 150)";
    document.getElementById("box1").style.backgroundColor = "inherit";
  }
  checkWinner();
}

function btn2() {
  const n = generate();
  if (n !== 6) {
    score2 = score2 + n;
  }
  let sc = document.getElementById("score2");
  const img = document.getElementById("img2");
  img.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    {
      duration: 200,
      easing: "ease-in-out",
    }
  );
  audio.play();
  if (n == 1) {
    img.src = "./_src/one.png";
  } else if (n == 2) {
    img.src = "./_src/two.png";
  } else if (n == 3) {
    img.src = "./_src/three.png";
  } else if (n == 4) {
    img.src = "./_src/four.png";
  } else if (n == 5) {
    img.src = "./_src/five.png";
  } else if (n == 6) {
    img.src = "./_src/six.png";
  }

  sc.innerText = score2;
  if (n < 6) {
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn1").disabled = true;
    document.getElementById("box2").style.backgroundColor =
      "rgb(150, 243, 150)";
    document.getElementById("box1").style.backgroundColor = "inherit";
  } else {
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = true;
    document.getElementById("box1").style.backgroundColor =
      "rgb(150, 243, 150)";
    document.getElementById("box2").style.backgroundColor = "inherit";
  }
  checkWinner();
}

function start() {
  document.getElementById("btn1").disabled = false;
  document.getElementById("start").disabled = true;
  document.getElementById("restart").disabled = false;
  document.getElementById("box1").style.backgroundColor = "rgb(150, 243, 150)";
  document.getElementById("box2").style.backgroundColor = "inherit";
  document.getElementById("popup").style.display = "none";
  button1.play();
}
function restart() {
  sweep.play();
  setTimeout(() => {
    sweep.pause();
  }, 500);
  score1 = 0;
  score2 = 0;
  document.getElementById("score1").innerText = "0";
  document.getElementById("score2").innerText = "0";
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  img1.src = "./_src/six.png";
  img2.src = "./_src/six.png";
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn2").disabled = true;
  document.getElementById("start").disabled = true;
  document.getElementById("restart").disabled = false;
  document.getElementById("box1").style.backgroundColor = "rgb(150, 243, 150)";
  document.getElementById("box2").style.backgroundColor = "inherit";
  document.getElementById("popup").style.display = "none";
  document.getElementById("sec").style.opacity = 1;

  d.style.display = "none";
  
}

function checkWinner() {
  if (score1 >= 100) {
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("start").disabled = true;

    document.getElementById("popup").style.display = "flex";
    document.getElementById("winner").innerText = `${player1Name} is Winner `;
    document.getElementById("sec").style.opacity = 0.1;
    document.getElementById("popupBtn").addEventListener("click", restart);
    succ.play();
  }

  if (score2 >= 100) {
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("start").disabled = true;
    document.getElementById("sec").style.opacity = 0.1;
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popupBtn").addEventListener("click", restart);
    document.getElementById("winner").innerText = `${player2Name} is Winner `;
    succ.play();
  }
}

function openInfo() {
  document.getElementById("info").style.display = "flex";
  document.getElementById("sec").style.opacity = 0.1;
  button1.play();
}
function closeInfo() {
  document.getElementById("info").style.display = "none";
  document.getElementById("sec").style.opacity = 1;
  button1.play();
}

function player1() {
  const n = document.getElementById("player1Name").value;
  if(n==="") n="Player 1";
  document.getElementById("p1").innerText = n;
  player1Name=n;
}
function player2() {
  const n = document.getElementById("player2Name").value;
  if(n==="") n="Player 2";
  document.getElementById("p2").innerText = n;
  player2Name=n;
}