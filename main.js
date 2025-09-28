// 1. Use readlineSync.question() to prompt a user for input
// 2. Prompt a user for an index number to find the character at that index
// 3. Use bracket notation to access the character
// 4. Print out the character

const readline = require("readline-sync");

let phrase = readline.question("Please enter a phrase: ");
let index = readline.questionInt("Please enter an index number: ");

console.log("Your phrase is " + phrase);
console.log("The character at index " + index + " is: " + phrase[index]);
