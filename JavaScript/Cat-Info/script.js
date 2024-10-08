const base_URL = "https://api.thecatapi.com/v1/images/";
const apikey =
  "live_tESZnJTg6bbhzQLXbw9k6tWIfAXtEk7zISL5LyAZz7ThpgJrwbNY5L1NQBxO1eyE";

const breeds = document.querySelectorAll("select");
const bree = document.querySelector("select");
const getDetail = document.querySelector("#submit");
const para1 = document.querySelector("#breedName");
const para2 = document.querySelector("#origin");
const para3 = document.querySelector("#nature");
const para4 = document.querySelector("#life");
const para5 = document.querySelector("#altName");
const para6 = document.querySelector("#about");
const para7 = document.querySelector("#weight");
const img = document.querySelector("#catImg");

for (let select of breeds) {
  for (breedCode in catBreeds) {
    let newOpt = document.createElement("option");
    newOpt.innerText = breedCode;
    newOpt.value = catBreeds[breedCode];
    if (select.name === "breed" && catBreeds[breedCode] === "pers") {
      newOpt.selected = "selected";
    }
    select.append(newOpt);
  }
}

getDetail.addEventListener("click", async (e) => {
  e.preventDefault();

  let URL = `${base_URL}search?breed_ids=${bree.value}&api_key=${apikey}`;
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);

  const name = data[0].breeds[0].name;
  const origin = data[0].breeds[0].origin;
  const about = data[0].breeds[0].description;
  const life = data[0].breeds[0].life_span;
  const nature = data[0].breeds[0].temperament;
  const altName = data[0].breeds[0].alt_names;
  const imgID = data[0].url;
  const weight = data[0].breeds[0].weight.metric;

  console.log(weight);
  
  para1.innerText = name;
  para2.innerText =  origin;
  para3.innerText = `${life} Years`;
  para4.innerText = nature;
  para5.innerText = altName;
  para6.innerText = `${about.slice(0, 250)}.`;
  para7.innerText = `${weight}Kg`

  img.src = imgID;
});
