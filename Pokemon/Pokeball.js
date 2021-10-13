
'use strict'

//con esto enlazo el html con la js 

const pokelist = document.querySelector(".pokeball");

const getpokemons = async () => { //De está forma obtenemos los pokemon
    const pokemons =[] ;
    for (let index =1; index < 152; index++) {
        let pokemonsfetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        let datospokemon = await pokemonsfetch.json();

        pokemons.push(datospokemon);

    }

    const pokemap = pokemons.map((element) => ({
        id:element.id,
        name:element.name,
        image:element.sprites.other["official-artwork"] ["front_default"],
        status:element.stats[1] ["base_stat"],
        status2:element.stats[2] ["base_stat"],
    }));

    return pokemap;
}

const drawpokemons = async () => {
    const pdatos = ["altura", "categoria", "habilidad", "sexo", "peso"];

    const poketext =[] ; 
for (let i = 0; i < pdatos.length; i++) {
  let text = pdatos[i];  
  poketext.push(text); 
  console.log(poketext);
}
    const pokemons = await getpokemons();
    pokemons.forEach(element => {
        pokelist.innerHTML += 
            '<li>' +
                '<h3>' + element.name + '</h3>' +
                '<img  src=' + element.image + ' ></img>' +
            '</li>';
    });
    

 //mostrar la info

 const pokedatos = document.querySelector(".pokedatos") ;
 '<div class= "flip_Card">'
 '</div>'
 '<div class= "flip_Card-inner">'
 '</div>'
'<div class="flip-card-front">'
'</div>'
'<div class="flip-card-back">'+'<p class="pokedatos"></p>'+'</div>'
 pokedatos.innerHTML= poketext;

}

drawpokemons();

