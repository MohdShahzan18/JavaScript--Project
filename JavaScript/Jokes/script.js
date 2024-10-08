const Base_URL = "https://official-joke-api.appspot.com/jokes/"

const category  = document.getElementById('category')
const getjoke = document.querySelector('#submit')
const setup = document.querySelector('#result')
const punchline = document.querySelector('#results')



getjoke.addEventListener("click" , async (e) => {
    e.preventDefault()

    const URL = `${Base_URL}${category.value}/random`
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data[0].setup);
    console.log(data[0].punchline);
     setup.innerText = data[0].setup 
     punchline.innerText = data[0].punchline 
    
})




