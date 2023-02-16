// WORKING WITH OBJECTS AND LOOPS

let monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};

// Using the monster Object, how can we access the second type?
// Using the monster Object, how can we access the name?

console.log("This is the second type of array " + monster.types[1])
console.log(monster.name);

// ===========================================


let pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

// CHALLENGES

//1- How can we console.log() the names of the pokemon who have an id greater than 99.
for (let i = 0; i < pokémon.length; i++){
    if(pokémon[i].id > 99){
        console.log(pokémon[i].name);
    }
}

// 2- LOG the pokemon objects whose id is evenly divisible by 3.
for(let i = 0; i < pokémon.length; i++){
    if (pokémon[i].id % 3 == 0){
        console.log(pokémon[i]);
    }
}

// 3- LOG the pokemon object that have more than one type.
for(let i = 0; i < pokémon.length; i++){
    if (pokémon[i].types.length > 1){
        console.log(pokémon[i]);
    }
}

// 4- LOG the name of the pokemon whose only type is poison.
for(let i = 0; i < pokémon.length; i++){
    if (pokémon[i].types == "poison"){
        console.log(pokémon[i].name);
    }
}

// 5-LOG the first type of all the pokemon whose second type is flying.
for(let i = 0; i < pokémon.length; i++){
    if (pokémon[i].types[1] == "flying"){
        console.log(pokémon[i].types[0]);
    }
}