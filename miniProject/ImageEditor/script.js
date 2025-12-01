const img = document.getElementById("image");
img.src && (img.style.display = "none");

let b = 1;
let g = 0;
let c = 1;
let sa = 1;
let se = 0;
let h = 0;
let i = 0;
let blur = 0;

function uploadImg() {
  const file = document.getElementById("upload").files[0];
  const fileURL = URL.createObjectURL(file);
  img.style.display = "block";
  img.src = fileURL;
  document.getElementById("uploadLabel").style.display = "none";
}

function applyFilter() {
  img.style.filter = `
    brightness(${b})
    saturate(${sa})
    contrast(${c})
    grayscale(${g}%)
    sepia(${se}%)
    invert(${i}%)
    hue-rotate(${h}deg)
    blur(${blur}px)
  `;
}

function changeBrightness() {
  b = document.getElementById("brightness").value / 50;
  applyFilter();
}

function changeContrast() {
  c = document.getElementById("contrast").value / 50;
  applyFilter();
}

function changeGrayScale() {
  g = document.getElementById("grayScale").value;
  applyFilter();
}

function changeSepia() {
  se = document.getElementById("sepia").value;
  applyFilter();
}

function changeSaturate() {
  sa = document.getElementById("saturate").value / 50;
  applyFilter();
}

function changeHue() {
  h = document.getElementById("hue").value;
  applyFilter();
}

function changeBlur() {
  blur = document.getElementById("blur").value;
  applyFilter();
}

function changeInvert() {
  i = document.getElementById("invert").value;
  applyFilter();
}

function reset() {
  b = 1;
  g = 0;
  c = 1;
  sa = 1;
  se = 0;
  h = 0;
  i = 0;
  blur = 0;
  document.getElementById("rotate").value = 0;
  document.getElementById("brightness").value = 50;
  document.getElementById("contrast").value = 50;
  document.getElementById("saturate").value = 50;
  document.getElementById("sepia").value = 0;
  document.getElementById("hue").value = 0;
  document.getElementById("invert").value = 0;
  document.getElementById("blur").value = 0;
  applyFilter();
}

function download() {
  if (!img.src) {
    alert("Please upload image first");
    return;
  }
  if (!img.complete) {
    alert("Image upload is in progress");
    return;
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const filter = getComputedStyle(img).filter;

  ctx.filter = filter === "none" ? "none" : filter;

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const dataURL = canvas.toDataURL("image/png");

  const a = document.createElement("a");

  a.href = dataURL;

  a.download = "editedImage.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
