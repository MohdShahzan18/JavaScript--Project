const Base_url = "https://api.quotable.io/quotes/random?/maxLength=150/tags=";

const category = document.querySelector("select");
const form = document.querySelector("form");
const msg = document.querySelector("#msg");
const author = document.querySelector("#author");

form.addEventListener("click", async (e) => {
  e.preventDefault();
  let URL = `${Base_url}${category.value}`;

  let response = await fetch(URL);
  let data = await response.json();

  msg.innerText = `"${data[0].content}"`;
  author.innerText = data[0].author;
});
