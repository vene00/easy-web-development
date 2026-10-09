const outputBox = document.getElementById("output-box");
const nums =
  "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM-_+=*&%$#@!?.";

function generate() {
  let password = "";

  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * nums.length);
    password += nums[randomIndex];
  }
  outputBox.textContent = password;
}
