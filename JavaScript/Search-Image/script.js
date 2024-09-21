const accesskey = "iXRZLnpSqyMXst-ixtn3oRLcTCLwx2qmmhC644cgKmI";
const form = document.querySelector("form");
const input = document.getElementById("search");
const showResult = document.querySelector(".cards");
const showMore = document.getElementById("showMore");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = input.value;
  const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

  const response = await fetch(URL);
  const data = await response.json();

  const results = data.results;

  if (page === 1) {
    showResult.innerHTML = "";
  }

  results.map((result) => {
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("card");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imgLink = document.createElement("a");
    imgLink.href = result.links.html;
    imgLink.target = "_blank";
    imgLink.textContent = result.alt_description;

    imgWrapper.appendChild(image);
    imgWrapper.appendChild(imgLink);
    showResult.appendChild(imgWrapper);
  });
  page++;
  if (page > 1) {
    showMore.style.display = "block";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMore.addEventListener("click", (event) => {
  searchImages();
});
