const result = document.getElementById("copyPass");
const len = document.getElementById("length");
const symbol = document.getElementById("symbol");
const num = document.getElementById("num");
const lower = document.getElementById("lower");
const upper = document.getElementById("upper");
const copy = document.getElementById('passcopy')
const capsValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerValue = "abcdefghijklmnopqrsuvwxyz";
const numValue = "1234567890";
const symbolValue = "@#$%&";

function getUpper() {
  return capsValue[Math.floor(Math.random() * capsValue.length)];
}
function getLower() {
  return lowerValue[Math.floor(Math.random() * lowerValue.length)];
}
function getNumber() {
  return numValue[Math.floor(Math.random() * numValue.length)];
}
function getSymbol() {
  return symbolValue[Math.floor(Math.random() * symbolValue.length)];
}

const generatex = () => {
  const x = [];
  if (symbol.checked) {
    x.push(getSymbol());
  }
  if (lower.checked) {
    x.push(getLower());
  }
  if (upper.checked) {
    x.push(getUpper());
  }
  if (num.checked) {
    x.push(getNumber());
  }
  if (x.length === 0) {
    return "";
  }
  return x[Math.floor(Math.random() * x.length)];
};

function passGenerator() {
  let password = "";
  const length = len.value;
  console.log(length);
  for (i = 0; i < length; i++) {
    const pass = generatex();
    password = password + pass;
  }
  console.log(password);
  result.innerHTML = password;
  copy.innerHTML = ""
}

function copyPassword(){
  const copyText = document.getElementById('copyPass')
  navigator.clipboard.writeText(copyText.textContent);
  // alert("password copy")

  const popup = document.querySelector('#popup-message')

  popup.style.display = "block"
  
  setTimeout(()=>{
    popup.style.display = "none"
  },2000)
}
