
const jokeGenerator = document.getElementsByClassName("joke-generator")[0]
const joke = document.getElementsByClassName("joke")[0]


const url =" https://api.api-ninjas.com/v1/dadjokes?limit=1"
const API_KEY = "Y66h1SlOblwmJA0yUTGomQ==jYyNomGASd5c2PpB"




const generateARandomJoke = ()=>{
    fetch(url,{
            method:"GET",
            headers: {
                'Content-Type':'application/json', 
                'X-Api-Key':API_KEY 
              }
        }  
    ).then(response => response.json())
    .then(data =>{
        joke.innerHTML = data[0].joke
    })
    .catch(error =>{
        console.log(error)
    })
}




jokeGenerator.addEventListener("click",generateARandomJoke)
