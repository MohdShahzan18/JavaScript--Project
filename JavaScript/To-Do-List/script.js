const inputVal = document.querySelector("#inputVal");
const divParent = document.querySelector("#mainT");
const popup = document.querySelector("#popup-message");

const saveData = () => {
  localStorage.setItem("data" , divParent.innerHTML);
}


const addEventListenerToTasks = () => {
  const icons = document.querySelectorAll(".check")
  const buttons = document.querySelectorAll(".dltBtn")

  icons.forEach((icon) => {
    const p = icon.nextElementSibling;

    icon.addEventListener('click',() => {
      if (p.style.textDecoration === "line-through") {
        p.style.textDecoration = "none";
        icon.innerHTML = "";
        icon.style.backgroundColor = "white";
        p.style.color = "black";
      } else {
        p.style.textDecoration = "line-through";
        p.style.color = "#111010bb";
        icon.innerHTML = `<i class="fa-solid fa-check"></i>`;
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
        icon.style.backgroundColor = "#07ff3c";
      }
      saveData()
    })
  })

  buttons.forEach((btn) => {
  btn.addEventListener("click" , (e) => {
    e.target.closest(".tasks").remove()
    saveData()
  })
  })
}

const showData = () => {
  const savedTasks = localStorage.getItem("data");
  if(savedTasks){
    divParent.innerHTML = savedTasks;
    addEventListenerToTasks()
  }
}
showData()

document.querySelector("#submit").addEventListener("click", () => {
    popup.style.display = "block";
    
    setTimeout(() => {
        popup.style.display = "none";
  }, 2000);

  if (inputVal.value == "") {
    popup.innerText = "Please Enter Task!!";
} else {
    popup.style.display = "none";
    
    let div = document.createElement("div");
    let icon = document.createElement("button");
    let p = document.createElement("p");
    let btn = document.createElement("button");

    div.classList.add("tasks");
    icon.classList.add("check");
    p.classList.add("task");
    p.classList.add("taskList");
    btn.classList.add("dltBtn");

    icon.type = "checkbox";
    btn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    p.innerText = inputVal.value;

    inputVal.value = "";

    divParent.append(div);
    div.append(icon);
    div.append(p);
    div.append(btn);

    icon.addEventListener("click", () => {
      if (p.style.textDecoration === "line-through") {
        p.style.textDecoration = "none";
        icon.innerHTML = "";
        icon.style.backgroundColor = "white";
        p.style.color = "black";
      } else {
        p.style.textDecoration = "line-through";
        p.style.color = "#111010bb";
        icon.innerHTML = `<i class="fa-solid fa-check"></i>`;
        icon.style.fontSize = "2rem";
        icon.style.color = "white";
        icon.style.backgroundColor = "#07ff3c";
        saveData()
      }
    });

    btn.addEventListener("click", () => {
      div.remove();
      saveData();
    });
    saveData()
  }

});
