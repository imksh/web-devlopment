function submit() {
  const name = document.getElementById("userName").value;
  const email = document.getElementById("userEmail").value;
  const number = document.getElementById("userNumber").value;
  const qualification = document.getElementById("qualification").value;
  const percent = document.getElementById("userPercentage").value;
  const preferredCourse = document.getElementById("preferredCourse").value;
  let selectedBatch = [];
  document.querySelectorAll("input[name='batch'],checked").forEach((ele) => {
    selectedBatch.push(ele.value);
  });
  const batchTime = document.querySelector("input[name='batchTime']:checked")?.value;
  const address = document.getElementById("userAddress").value;
  const city = document.getElementById("userCity").value;
  const pinCode = document.getElementById("userPincode").value;
  const guardianName = document.getElementById("guardianName").value;
  const GuardianContactNumber = document.getElementById(
    "GuardianContactNumber"
  ).value;
  const refSource = document.getElementById("refSource").value;
  console.log("name: ", name);
  console.log("email: ", email);
  console.log("number: ", number);
  console.log("qualification: ", qualification);
  console.log("percent: ", percent);
  console.log("preferredCourse: ", preferredCourse);
  console.log("selectedBatch: ", selectedBatch);
  console.log("batchTime: ", batchTime);
  console.log("address: ", address);
  console.log("city: ", city);
  console.log("pinCode: ", pinCode);
  console.log("guardianName: ", guardianName);
  console.log("GuardianContactNumber: ", GuardianContactNumber);
  console.log("refSource: ", refSource);
}
