const body = document.querySelector("body");
const heading = document.querySelector("h1");
console.log(heading);

const buttons = document.getElementsByClassName("btn");
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    switch (event.target.id) {
      case "btn1":
        body.style.backgroundColor = "#ff0000";
        heading.style.color = "black";
        break;
      case "btn2":
        body.style.backgroundColor = "#00f621c3";
        heading.style.color = "white";
        break;
      case "btn3":
        body.style.backgroundColor = "yellow";
        heading.style.color = "black";
        break;
      case "btn4":
        body.style.backgroundColor = "#006affc3";
        break;
      case "btn5":
        body.style.backgroundColor = "black";
        heading.style.color = "white";
        break;
      case "btn6":
        body.style.backgroundColor = "grey";
        heading.style.color = "black";
        break;
      case "btn7":
        body.style.backgroundColor = "purple";
        heading.style.color = "white";
        break;
      default:
        console.log("unknownn ");
        break;
    }
  });
}
