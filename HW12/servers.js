const baseUrl = 'https://swapi.dev/api';

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const characters = document.getElementById('characters');
const planets = document.querySelector('#planets');
const next = document.querySelector('#next');
const page = document.querySelector('#page');
const h2 = document.querySelector('h2');
let currentPage = 1;


const getCharacters = () => {

    characters.innerHTML = "loading...";
    axios
     .get(`${baseUrl}/films/2`)
     .then((response) => {
        let character = []
        const charList = response.data.characters;
        charList.map(char => {
            axios
             .get(`${char}`)
             .then((inf) => {
               character += 
                `<div><h2>${inf.data.name}</h2> 
                <div>${inf.data.birth_year}</div> 
                <div>${inf.data.gender}</div></div>`
                characters.innerHTML = character;
                
                }
             )
        })
     })
     .catch((err) => {
        console.log(err)
     })
}

button1.addEventListener("click", getCharacters)

const getPlanets = () => {

   planets.innerHTML = "loading..."
   axios
      .get(`${baseUrl}/planets/?page=${currentPage}`)
      .then(response => {
         const planetss = response.data.results.map(planet => `<div>${planet.name}</div>`)
           planets.innerHTML = planetss.join('');
         });
}

button2.addEventListener("click", () => {
   page.innerHTML = currentPage
   getPlanets(),
   next.style.display = "block",
   h2.style.display = "block"})

next.addEventListener("click", () => {
   if(currentPage === 6) return;
   currentPage += 1;
   getPlanets(),
   page.innerHTML = currentPage}) 
