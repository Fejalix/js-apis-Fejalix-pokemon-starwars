function getRandomInt(max) {   //genere un nombre aléatoire
  return Math.floor(Math.random() * max);
}
const pokemon1 = getRandomInt(814);
console.log(pokemon1);
const pokemon2 = getRandomInt(814);
console.log(pokemon2);

fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon1)

.then(response => response.json())
.then(data => {
const selectcontent = document.querySelector(".pokemon")
const div = document.createElement("div") // constante crée un element div
div.classList.add("cardP1")
div.classList.add("card") // ajoute la class card à l"élement div
selectcontent.appendChild(div) // on met la div dans en tant que enfant de content
const image = document.createElement("img")
image.src = data.sprites.other.home.front_default
div.appendChild(image)
const h1 = document.createElement("h1")
h1.innerHTML = data.name
div.appendChild(h1)
var pokemon1Name = data.name
var pokemon1Hp = data.stats[0].base_stat
var pokemon1Att = data.stats[1].base_stat
const statsP1 = document.createElement("div");
statsP1.className = "statsP1";
document.querySelector(".card").appendChild(statsP1);
//stats_att
const stats_attP1 = document.createElement("div");
stats_attP1.className = "stats_attP1";
document.querySelector(".statsP1").appendChild(stats_attP1);
//att_info
const att_infoP1 = document.createElement("p");
att_infoP1.className = "att_infoP1";
att_infoP1.appendChild(document.createTextNode(pokemon1Att))
stats_attP1.appendChild(att_infoP1)
//stats_hp
const stats_hpP1 = document.createElement("div");
stats_hpP1.className = "stats_hpP1";
document.querySelector(".statsP1").appendChild(stats_hpP1);
//hp_info
const hp_infoP1 = document.createElement("p");
hp_infoP1.className = "hp_infoP1";
hp_infoP1.appendChild(document.createTextNode(pokemon1Hp))
stats_hpP1.appendChild(hp_infoP1)

fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon2)
.then(response => response.json())
.then(data => {
const selectcontent = document.querySelector(".pokemon")
const div = document.createElement("div") // constante crée un element div
div.classList.add("card") // ajoute la class card à l"élement div
div.classList.add("cardP2")
selectcontent.appendChild(div) // on met la div dans en tant que enfant de content
const image = document.createElement("img")
image.src = data.sprites.other.home.front_default
div.appendChild(image)
const h1 = document.createElement("h1")
h1.innerHTML = data.name
div.appendChild(h1)
var pokemon2Name = data.name
var pokemon2Att = data.stats[1].base_stat
var pokemon2Hp = data.stats[0].base_stat
const statsP2 = document.createElement("div");
statsP2.className = "statsP2";
div.appendChild(statsP2);
//stats_att
const stats_attP2 = document.createElement("div");
stats_attP2.className = "stats_attP2";
statsP2.appendChild(stats_attP2);
//att_info
const att_infoP2 = document.createElement("p");
att_infoP2.className = "att_infoP2";
att_infoP2.appendChild(document.createTextNode(pokemon2Att))
stats_attP2.appendChild(att_infoP2)
//stats_hp
const stats_hpP2 = document.createElement("div");
stats_hpP2.className = "stats_hpP2";
document.querySelector(".statsP2").appendChild(stats_hpP2);
//hp_info
const hp_infoP2 = document.createElement("p");
hp_infoP2.className = "hp_infoP2";
hp_infoP2.appendChild(document.createTextNode(pokemon2Hp))
stats_hpP2.appendChild(hp_infoP2)
// button fight
const button = document.querySelector('.fight')
button.addEventListener('click', event => {
  pokemon1Hp = pokemon1Hp - pokemon2Att
  console.log(pokemon1Hp)
  if (pokemon1Hp > 0){
    pokemon2Hp = pokemon2Hp - pokemon1Att
    console.log("pokemon2Hp: il reste ", pokemon2Hp)
    if(pokemon2Hp > 0){
      pokemon1Hp = pokemon1Hp - pokemon2Att
      console.log("pokemon1Hp: il reste ", pokemon1Hp)
    }else{
      console.log("pokemon2Hp est mort " + pokemon2Hp)
      console.log(pokemon2Name, " est mort et ",pokemon1Name," gagne le combat")
      document.querySelector(".cardP1").style.backgroundColor = 'mediumseagreen'
      document.querySelector(".cardP2").style.backgroundColor = 'crimson'
    }
  }else{
    console.log("pokemon1Hp est mort " + pokemon1Hp)
    console.log(pokemon1Name, " est mort et ",pokemon2Name," gagne le combat")
    document.querySelector(".cardP2").style.backgroundColor = 'mediumseagreen'
    document.querySelector(".cardP1").style.backgroundColor = 'crimson'
  }

});
})
})

//star wars API

fetch('https://swapi.dev/api/people/')

.then(response => response.json())
.then(data => {
    console.log(data)
    const container = document.querySelector('#peopleCollection')
    data.results.forEach(element => {
      const selectcontent = document.querySelector("#peopleCollection")
      const div = document.createElement("div") // constante crée un element div
      div.classList.add("cardSW")
      selectcontent.appendChild(div) // on met la div dans en tant que enfant de content
      const h1 = document.createElement("h1")
      h1.innerHTML = element.name
      div.appendChild(h1)
      h1.classList.add("collectionName")
      h1.setAttribute("data-link", element.homeworld);


      document.querySelectorAll('.collectionName').forEach(el => {
        el.addEventListener('click', event => {
            loadAsset(el.dataset.link)
        })
    })

    });


})

function loadAsset(species) {
  const collectionSingleDiv = document.querySelector('#peopleCollection')
  const assetContainerDiv = document.querySelector('#starWarsPeopleInfo')
  collectionSingleDiv.style.display = 'none'
  assetContainerDiv.style.display = 'flex'
  assetContainerDiv.innerHTML = ''

  fetch(species)
      .then(response => response.json())
      .then(data => {
          assetContainerDiv.innerHTML = `
              <div class="cardSW-homeworld">
                  <h1 class="closePlanet">${data.name} is my planet</h1>
                  <article>
                  <h2>Rotation period : ${data.rotation_period} H</h2>
                  <h2>Diameter : ${data.diameter} km</h2>
                  <h2>Population : ${data.population} inhabitant</h2>
                  <h2>Climate : ${data.climate}</h2>
                  <h2>Gravity : ${data.gravity}</h2>
                  <h2>Terrain : ${data.terrain}</h2>
                  <h2>Surface water : ${data.surface_water}</h2>
                  <span class="closePlanet" onclick="returnToHome()">x</span>
                  </article>
               </div>   
          `
      })
}
function returnToHome() {
  const collectionSingleDiv = document.querySelector('#peopleCollection')
  const assetContainerDiv = document.querySelector('#starWarsPeopleInfo')
  collectionSingleDiv.style.display = 'flex'
  assetContainerDiv.style.display = 'none'
  assetContainerDiv.innerHTML = ''
}
