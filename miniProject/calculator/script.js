let button1 = new Audio("./_src/button.mp3");
let button2 = new Audio("./_src/button2.mp3");
let err = new Audio("./_src/error.mp3");
let succ = new Audio("./_src/sucess.mp3");
let sweep = new Audio("./_src/clear.mp3");

function input(char) {
  let s = document.getElementById("display").innerText;
  if (s.toLowerCase().includes("invalid")) {
    document.getElementById("display").innerText = "";
  }
  if (char === "=") {
    try {
      let exp = document.getElementById("display").innerText;
      document.getElementById("display").innerText = eval(exp);
      succ.play();
    } catch (error) {
      console.log(error);
      document.getElementById("display").innerText = "Invalid";
      err.currentTime = 0.3;
      err.play();
    }
  } else if (char === "c") {
    document.getElementById("display").innerText = "";
    sweep.play();
    setTimeout(() => {
      sweep.pause();
    }, 500);
  } else if (char === "x") {
    let exp = document.getElementById("display").innerText;
    document.getElementById("display").innerText = exp.slice(0, exp.length - 1);
    button1.play();
  } else {
    let exp = document.getElementById("display").innerText;
    if ("*/+-".includes(exp.charAt(exp.length - 1)) && "*/+-".includes(char)) {
      exp = exp.slice(0, exp.length - 1);
    }
    button2.play();
    exp = exp + char;
    document.getElementById("display").innerText = exp;
  }
}
