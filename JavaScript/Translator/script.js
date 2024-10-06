const Base_URL = "https://api.mymemory.translated.net/get?q=";

const textArea = document.querySelector("#input");
const translation = document.querySelector("#result");
const selects = document.querySelectorAll("select");
const button = document.querySelector("#submit");
const from = document.querySelector("#from");
const to = document.querySelector("#to");

for (let select of selects) {
  for (codes in languages) {
    let newOpt = document.createElement("option");

    langName = languages[codes];
    newOpt.innerText = langName;
    newOpt.value = codes;

    if (select.name === "from" && langName === "English") {
      newOpt.selected = "selected";
    } else if (select.name === "to" && langName === "Hindi") {
      newOpt.selected = "selected";
    }
    select.append(newOpt);
  }
}

button.addEventListener("click", async () => {
  sentence = textArea.value;

  toVal = to.value.split("-");
  fromVal = from.value.split("-");

  const URL = `${Base_URL}${sentence}!&langpair=${fromVal[0]}|${toVal[0]}`;

  let response = await fetch(URL);
  let data = await response.json();
  let msg = data.responseData.translatedText;

  translation.innerText = msg;
});

function copyButton() {
  const copyText = document.getElementById("result");
  navigator.clipboard.writeText(copyText.textContent);

  const popup = document.getElementById("popup-message");
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
}

