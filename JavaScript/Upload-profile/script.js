let inputFile = document.getElementById("file");
let profileImg = document.getElementById("profileImg");
const card = document.getElementById("card");

const changeImg = () => {
  let Url = URL.createObjectURL(inputFile.files[0]);
  profileImg.src = Url;
};

inputFile.addEventListener("change", changeImg);

card.addEventListener("dragover", (e) => {
  e.preventDefault();
  changeImg();
});

card.addEventListener("drop", (e) => {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  changeImg();
});
