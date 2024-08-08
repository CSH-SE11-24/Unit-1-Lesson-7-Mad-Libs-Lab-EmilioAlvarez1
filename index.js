// Console log a welcome message with instructions to mad libs
let name = prompt("Introduce yourself");
console.log("Welcome to mad libs " + name)
console.log("The game starts by you answering the questions to create a fun story")

console.log("type start when ready")
let start = prompt("type start here")
// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjective = prompt(name + " give me an adjective")
let noun = prompt(name + " Give me a noun")
let Adjective = prompt(name + " give me another adjective")
let Noun = prompt(name + " give me another noun")

// Create an array that stores the values the user entered

let words = []
words.push(adjective,noun,Adjective,Noun)
// Console log the story with the array values passed into the blanks

console.log("He is so " + words[0] + " went to " + words[1] + " And was very angry because " + words[2] + " so he returned to " + words[3])
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive








