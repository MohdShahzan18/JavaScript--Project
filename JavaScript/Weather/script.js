const Base_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";
const API_key = "19e43b426aae20ed629d5946342583d5";

const input = document.querySelector("#input");
const btn = document.querySelector("button");
const mainHeading = document.querySelector("#main-head");
const desc = document.querySelector("#desc");
const tempH = document.querySelector("#tempH");
const temp = document.querySelector("#temp");
const tempMax = document.querySelector("#tempMax");
const tempMin = document.querySelector("#tempMin");
const humidityH = document.querySelector("#humidityH");
const wind = document.querySelector("#Wind");
const feelslike = document.querySelector("#feelsLike");
const humidity = document.querySelector("#humidity");
const windSpeedH = document.querySelector("#windSpeedH");
const windSpeed = document.querySelector("#windSpeed");
const windGust = document.querySelector("#windGust");
const footer = document.querySelector(".footer");
const mainImg = document.querySelector("#main-img");
const Fbtn = document.querySelector("#fahrenhiet");
const darkMode = document.querySelector("#nightBtn");
const lightMode = document.querySelector("#dayBtn");

document.addEventListener("DOMContentLoaded", function () {
  btn.addEventListener("click", async (e) => {
    e.preventDefault();

    let URL = `${Base_URL}${input.value}&units=metric&appid=${API_key}`;

    let response = await fetch(URL);
    let data = await response.json();

    const tempElements = [];

    data.list.forEach((item, i) => {
      let newDiv = document.createElement("div");
      let newP = document.createElement("p");
      let newImg = document.createElement("img");

      newDiv.classList.add("item");
      newDiv.classList.add("hidden");
      newP.classList.add("Ptemp");
      newImg.classList.add("iconImg");

      let icon = data.list[i].weather[0].icon;
      let iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

      newImg.src = `${iconUrl}`;

      let date = new Date(data.list[i].dt_txt);
      let weekDay = date.toString().split(1);
      let dateofMonth = date.getDate();
      let hours = date.getHours();
      let minutes = date.getMinutes();

      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;

      minutes = minutes < 10 ? "0" + minutes : minutes;

      let formattedTime = `${hours}:${minutes} ${ampm}`;

      newDiv.innerText = `${weekDay[0].slice(
        0,
        3
      )} ${dateofMonth}\n${formattedTime}\n`;
      newP.innerText = `${data.list[i].main.temp}\u00B0C`;
      footer.append(newDiv);
      newDiv.append(newImg);
      newDiv.append(newP);

      tempElements.push(newP);
    });

    let currIndex = 7;

    const items = document.querySelectorAll(".item");
    items.forEach((item, i) => {
      if (i < 7) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });

    document
      .querySelector("#showMoreBtn")
      .addEventListener("click", function () {
        if (currIndex < items.length) {
          items[currIndex].classList.remove("hidden");

          if (currIndex - 7 >= 0) {
            items[currIndex - 7].classList.add("hidden");
          }
          currIndex++;
        }
      });

    document
      .querySelector("#showPrevBtn")
      .addEventListener("click", function () {
        if (currIndex > 7) {
          currIndex--;
          items[currIndex].classList.add("hidden");

          if (currIndex - 7 >= 0) {
            items[currIndex - 7].classList.remove("hidden");
          }
        }
      });

    mainHeading.innerText = `${data.city.name}`;
    desc.innerText = data.list[0].weather[0].description;
    temp.innerText = `Temprature is ${data.list[0].main.temp}\u00B0C`;
    tempMin.innerText = `Min Temprature is ${data.list[0].main.temp_min}\u00B0C`;
    tempMax.innerText = `Max Temprature is ${data.list[0].main.temp_max}\u00B0C`;
    wind.innerText = `Wind Degree is ${data.list[0].wind.deg}`;
    feelslike.innerText = `Feels Like ${data.list[0].main.feels_like}`;
    humidity.innerText = `Humidity is ${data.list[0].main.humidity}`;
    windSpeed.innerText = `Wind Speed is ${data.list[0].wind.speed}`;
    windGust.innerText = `Wind Gust is ${data.list[0].wind.gust}`;
    let rTempH = data.list[0].main.temp;
    tempH.innerText = ` ${Math.round(rTempH)}\u00B0C`;
    humidityH.innerText = ` ${data.list[0].main.humidity}% `;
    windSpeedH.innerText = ` ${data.list[0].wind.speed} Km/h`;
    mainImg.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`;

    const celtofah = (values) => {
      return Math.round(values * (9 / 5) + 32);
    };
    const Fbtn = document.querySelector("#fahrenhiet");
    const Cbtn = document.querySelector("#celsius");
    if (Fbtn) {
      Fbtn.addEventListener("click", function () {
        tempH.innerText = `${celtofah(data.list[0].main.temp)}\u00B0F`;
        temp.innerText = `Temprature is ${celtofah(
          data.list[0].main.temp
        )}\u00B0F`;
        tempMin.innerText = `Min Temprature is ${celtofah(
          data.list[0].main.temp_min
        )}\u00B0F`;
        tempMax.innerText = `Max Temprature is ${celtofah(
          data.list[0].main.temp_max
        )}\u00B0F`;

        tempElements.forEach((tempEl, i) => {
          tempEl.innerText = `${celtofah(data.list[i].main.temp)}\u00B0F`;
        });
      });
    }
    const fahtocel = (values) => {
      return Math.round((5 / 9) * (values - 32));
    };
    if (Cbtn) {
      Cbtn.addEventListener("click", function () {
        tempH.innerText = `${fahtocel(
          celtofah(data.list[0].main.temp_min)
        )}\u00B0C`;
        temp.innerText = `Temprature is ${fahtocel(
          celtofah(data.list[0].main.temp)
        )}\u00B0C`;
        tempMin.innerText = `Min Temprature is ${fahtocel(
          celtofah(data.list[0].main.temp_min)
        )}\u00B0C`;
        tempMax.innerText = `Max Temprature is ${fahtocel(
          celtofah(data.list[0].main.temp_max)
        )}\u00B0C`;

        tempElements.forEach((tempEl, i) => {
          tempEl.innerText = `${fahtocel(
            celtofah(data.list[i].main.temp)
          )}\u00B0C`;
        });
      });
    }
  });
});

darkMode.addEventListener("click", () => {
  document.querySelector("body").style.backgroundImage =
    'url("168662-Photoroom.png")';
  document.querySelector("#logo").src = "moon.png";
  document.querySelector("#logo").style.marginTop = "-22px";
  document.querySelector("#logo").style.height = "160px";
  document.querySelector("#logo").style.width = "100px";
  document.querySelector("body").style.color = "white";
  document.querySelector(".btnDiv").style.borderLeft = "3px solid white";
  const buttons = document.querySelectorAll("button");
  document.querySelector("#dayBtn").style.borderLeft = "3px solid white";
  buttons.forEach((button) => {
    button.style.color = "white";
  });
  input.style.color = "white";
});
lightMode.addEventListener("click", () => {
  document.querySelector("body").style.backgroundImage =
    'url("amazing-sunny-day-wallpaper-1.jpg")';
  document.querySelector("#logo").src =
    "istockphoto-1830419112-612x612-Photoroom.png";
  document.querySelector("#logo").style.height = "100px";
  document.querySelector("#logo").style.width = "100px";
  document.querySelector("#logo").style.marginTop = "0px";
  document.querySelector("body").style.color = "black";
  document.querySelector("#dayBtn").style.borderLeft = "3px solid black";
  document.querySelector(".btnDiv").style.borderLeft = "3px solid black";
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.style.color = "black";
  });
  input.style.color = "black";
});
