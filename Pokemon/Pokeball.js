
'use strict'

//con esto enlazo el html con la js 

const pokelist = document.querySelector(".pokeball");

const getpokemons = async () => {
    const pokemons = new Array();
    for (let index =1; index <= 150; index++) {
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
    const pokemons = await getpokemons();
    pokemons.forEach(element => {
        pokelist.innerHTML += 
            '<li>' +
                '<h3>' + element.name + '</h3>' +
                '<img  src=' + element.image + ' ></img>' +
            '</li>';
    });


    /*const card = document.getElementsById("flip-card")
    card.addEventListener("click",flipCard);
    function flipCard() {
        card.classList.toggle("flipCard");
    }*/
    
}

drawpokemons();

