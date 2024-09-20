const select = document.getElementById('select')
const inputAll = document.querySelectorAll('input')
let myImg = document.querySelector('img')
let text = document.getElementById('text')

let urlObj = {}

const removeHash = (str) => {
     return str.replace("#" , "")
}

function createImgPath(){

    urlObj.size = select.value;
    urlObj.text = inputAll[0].value
    urlObj.bgClr = removeHash(inputAll[1].value)
    urlObj.txtClr = removeHash(inputAll[2].value)

    let url = `http://via.placeholder.com/${urlObj.size }/${urlObj.bgClr}/${urlObj.txtClr}?text=${urlObj.text}`
    myImg.src = url
    text.innerHTML = url

}
inputAll.forEach((currElem) => currElem.addEventListener('change' , createImgPath))
select.addEventListener('change' , createImgPath)

function copyPassword(){
    const copyText = document.getElementById('text')
    navigator.clipboard.writeText(copyText.textContent);
}
