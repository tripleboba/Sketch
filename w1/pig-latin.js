/*
Write a program that takes any number of command line arguments, converts each to pig latin
then puts the translated words together into one sentence logged to the console.

Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.
*/

// take input from command line
const input = process.argv.slice(2);
console.log(`----\ninput: ${input.join(' ')}`);
let translated = [];

// translated func
const pigLatin = input => {
  for (let word of input) {
    translated.push(word.slice(1) + word[0] + 'ay');
  }
  return translated;
};

// display output as a string
console.log(`-> ${pigLatin(input).join(' ')}\n----`);

// -- OTHER SOLUTION --
let originalWords = process.argv.slice(2);
let pigLatinWords = [];

for (let i = 1; i < originalWords.length; i++) {
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));

function translateToPigLatin(word) {
  return word.slice(2, word.length) + word[0] + "ay";
}