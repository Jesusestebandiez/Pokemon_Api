
'use strict'

const pokelist = document.querySelector(".pokeball");

const getpokemons = async () => {
    //De está forma obtenemos los pokemon
    const pokemons = [] ;
    for (let index =1; index < 152; index++) {
        let pokemonsfetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        let datospokemon = await pokemonsfetch.json();

        pokemons.push(datospokemon);

    }

    const pokemap = pokemons.map(element => {
        const gender = element.sprites.back_female ? "Masculino" : "Femenino";
        let response = {
            id: element.id,
            name: element.name,
            image: element.sprites.other["official-artwork"] ["front_default"],
            status: element.stats[1] ["base_stat"],
            status2: element.stats[2] ["base_stat"],
            height: element.height,
            types: element.types,
            abilities: element.abilities,
            weight: element.weight,
            gender: gender
        }
        return response
    });

    return pokemap;
}

const drawpokemons = async () => {
    const pokemons = await getpokemons();
    pokemons.forEach(element => {
        const abilities = element.abilities;
        const types = element.types;
        const abilitiesElements = abilities.map(
            element => '<div style="text-transform: capitalize">' + element.ability.name + '</div>').join('');
        const typesElements = types.map(
            element => '<div style="text-transform: capitalize">' + element.type.name + '</div>').join('');
        pokelist.innerHTML +=
            '<li class="card">' +
                '<h3 style="text-transform: capitalize">' + element.name + '</h3>' +
                '<div class="flip-card" ><div class="flip-card-inner">' +
                '<div class="flip-card-front"><img  src=' + element.image + ' ></img></div>' +
                '<div class="flip-card-back">' + 
                '<div>Altura: ' + element.height + '</div>' +
                '<div>Habilidades: ' + abilitiesElements + '</div>' +
                '<div>Peso: ' + element.weight + '</div>' +
                '<div>Género: ' + element.gender + '</div>' +
                '<div>Categorías: ' + typesElements + '</div>' +
            '</div></div></div></li>';
    });
}

drawpokemons();