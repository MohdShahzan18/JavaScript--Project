const BASE_URL =
  "https://v6.exchangerate-api.com/v6/8ca1ba6af3933ba41592c763/latest/";

const selects = document.querySelectorAll(".select select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
let msg = document.querySelector("#msg");

for (let select of selects) {
  for (currCode in countryList) {
    let newOpt = document.createElement("option");
    newOpt.innerText = currCode;
    newOpt.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOpt.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOpt.selected = "selected";
    }
    select.append(newOpt);
  }
  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  console.log(amtVal);
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = 1;
  }
  const URL = `${BASE_URL}${fromCurr.value}`;
  let response = await fetch(URL);
  let data = await response.json();
  let exchangeRate = data.conversion_rates[toCurr.value];

  let convertedAmt = amtVal * exchangeRate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${convertedAmt} ${toCurr.value} `;
});
