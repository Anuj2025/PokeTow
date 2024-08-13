let url = "https://pokeapi.co/api/v2/pokemon/";

const typeColor = {
  bug: "#26de81",
   dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#8lecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
}

let user = prompt('You Are?');



async function GetPokemon() {
  const  id = Math.floor(Math.random() * 150) + 1;
  const newUrl = url + id;
  fetch(newUrl).then((response) => response.json()).then((data) => {
    document.querySelector("#PokeImg").src = data.sprites.other.dream_world.front_default;
    console.log(data);
    const themeColor = typeColor[data.types[0].type.name];
    document.querySelector(".PokeMon").style.background = themeColor;
    document.querySelector("#NameComponent").innerHTML =  data.name;
    document.querySelector(".hp").innerHTML = "hp: " + data.stats[0].base_stat;
    document.querySelector(".User").innerHTML = `${user}`;
    document.querySelector(".Creator").style.color = themeColor;
  });
}


window.addEventListener('load', () => {
document.querySelector(".loder").style.display = "block";
  setTimeout(() => {
    document.querySelector(".loder").style.display = "none";
    document.querySelector(".con").style.display = "block";
  }, 2500);
  GetPokemon();
});

