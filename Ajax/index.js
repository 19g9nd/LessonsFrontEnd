import API from './api.js'

//2 (normal)
fetch (API)
  .then(response => response.json())
  .then(json => fetch(json.characters))
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err.message));

//3 (also normal)
async function getCharacters() {
  const response = await fetch(API);
  const API_MAP = await response.json();
  
  const response2 = await fetch(API_MAP.characters);
  const characters = await response2.json();
  console.log(characters);
}

getCharacters();

//3.5 ( 2+3 )
//bad
// async function getChars(){

//   const api_map = await fetch (API)
//   .then(response => response.json());
  
//   const characters = await fetch(api_map.characters)
//   .then(response => response.json())
//   console.log(characters);
// }
// getChars();

//better
const map = await fetch(API).then(r => r.json());
const chr = await fetch(map.characters).then(r => r.json());
console.log(chr);

//1 (old)

const request = new XMLHttpRequest();

request.open('GET',API);
request.addEventListener('load', (e)=> {
  const response = JSON.parse(request.response);

  const request1 = new XMLHttpRequest();
  request1.open('GET',response.characters);
  request1.addEventListener('load', ()=> {
   console.log(JSON.parse(request1.response));
  
})

request1.send();
})

request.send();