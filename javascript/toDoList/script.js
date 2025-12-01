function add() {
  const list = document.getElementById("list");
  let task = document.getElementById("newTask");
  if (task.value.trim() === "") {
    alert("Enter the task");
    return;
  }
  const l = document.createElement("li");
  l.classList.add(
    "d-flex",
    "justify-content-between",
    "border-bottom",
    "px-4",
    "py-3",
    "rounded-3",
    "align-items-center"
  );
  const d = document.createElement("div");
  d.classList.add();
  d.innerText = task.value;
  const b = document.createElement("button");
  b.classList.add("btn", "btn-danger", "w-25");
  b.innerHTML = `<i class="bi bi-trash"></i> Delete`;
  b.onclick = () => {
    l.remove();
  };

  //   const s = document.createElement("span");
  //   s.innerText = " Delete";
  //   const i = document.createElement("i");
  //   i.classList.add("bi", "bi-trash");

  //   b.appendChild(i);
  //   b.appendChild(s);

  l.appendChild(d);
  l.appendChild(b);

  list.appendChild(l);
  task.value = "";
}
