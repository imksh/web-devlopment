function add() {
  const website = document.getElementById("website").value;
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  const dataPacket = {
    website,
    name,
    password,
  };

  const data = JSON.parse(localStorage.getItem("passwordManager")) || [];

  data.push(dataPacket);

  localStorage.setItem("passwordManager", JSON.stringify(data));

  document.getElementById("website").value = "";
  document.getElementById("name").value = "";
  document.getElementById("password").value = "";
}

function download() {
  const data = JSON.parse(localStorage.getItem("passwordManager")) || [];
  if (data.length <= 0) {
    alert("No data found");
    return;
  }
  const headers = Object.keys(data[0]).join(",") + "\n";
  const rows = data.map((item) => Object.values(item).join(",") + "\n");

  const CSVContent = headers + rows;

  const blob = new Blob([CSVContent], { type: "text/csv" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "data.csv";
  document.body.appendChild(a);
  a.click();
  document.body.remove(a);
}

function show() {
  const data = JSON.parse(localStorage.getItem("passwordManager")) || [];
  const table = document.getElementById("table");
  const div = document.getElementById("div");
  table.innerHTML = "";

  div.classList.add("d-flex");
  div.classList.remove("d-none");
  const row1 = document.createElement("tr");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  row1.classList.add("text-center");
  th1.innerText = "Website Name";
  th2.innerText = "Name";
  th3.innerText = "Password";
  row1.appendChild(th1);
  row1.appendChild(th2);
  row1.appendChild(th3);
  table.appendChild(row1);

  data.map((d) => {
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    row.classList.add("text-center","border-bottom");
    td1.innerText = d.website;
    td2.innerText = d.name;
    td3.innerText = d.password;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    table.appendChild(row);
  });
}
