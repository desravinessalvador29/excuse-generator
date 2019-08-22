window.onload= () =>{

    let adjectives = ["dumb", "angry", "bald", "grumpy", "pitiful", "wonderful", "thankful", "silly"]
    let nouns = ["dog", "fish", "bed", "cat", "iguana", "tiger", "lizard", "snail"]
    let verbs = ["ate", "ripped", "chewed", "threw", "wrote", "baked", "kicked"]
    let possessions = ["laptop", "book", "bed", "chair", "code", "pillow", "charger", "house"]
    let locations = ["yesterday", "at church", "in the backard", "last night", "yesterday morning", "last sunday", "after class", "on the tree"]

let adjective = adjectives[Math.floor(Math.random()* adjectives.length)];
let noun = nouns[Math.floor(Math.random()* nouns.length)];
let verb = verbs[Math.floor(Math.random()* verbs.length)];
let possession = possessions[Math.floor(Math.random()* possessions.length)];
let location = locations[Math.floor(Math.random()* locations.length)];
document.querySelector('.excuses').innerHTML = " " + "my" + " " + adjective + " " + noun + " " + verb + " " + "my" + " " + possession + " " + location;
//console.log(adjectives + " " + nouns + " " + verbs + " " + possessions + " " + locations)
}