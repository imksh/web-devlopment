function login() {
  console.log("Login button clicked");

  const em = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPassword").value;
  console.log("Email: ",em);
  console.log("Password: ",pass);
  alert("Login Done");
  document.getElementById("loginEmail").value = "";
  document.getElementById("loginPassword").value = "";
}

function registration() {
  console.log("Registration button clicked");
  const name = document.getElementById("registrationName").value;
  const em = document.getElementById("registrationEmail").value;
  const pass = document.getElementById("registrationCreatePassword").value;
  const confirmPass = document.getElementById("registrationConfirmPassword").value;
  console.log("Name: ",name);
  console.log("Email: ",em);
  console.log("Password: ",pass);
  console.log("Confirm Password: ", confirmPass);
  
  
  alert("Registration Done");
  document.getElementById("registrationName").value = "";
  document.getElementById("registrationEmail").value = "";
  document.getElementById("registrationCreatePassword").value = "";
  document.getElementById("registrationConfirmPassword").value = "";
}
