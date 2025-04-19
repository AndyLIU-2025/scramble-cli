#!/usr/bin/env node
const inquirer = require("@inquirer/prompts");
const { scrambleWord, isCorrect } = require("./scramble");

// 🚀  Your mission: prompt the user for their name, show them a scrambled word,
//     accept their guess, and celebrate if they’re right. Loop for 5 rounds.
//     Be creative – add a score, colours (chalk), or a countdown timer!


async function main() {
  // TODO: Welcome the player & run the game loop 🕹️
//console.log("Welcome to Word Scramble");
//let a = "hello world";
//console.log(scrambleWord(a));
//isCorrect(a,b);
const array = ["node", "software", "java"];
const prompt = require('prompt-sync')();
const puzzle = scrambleWord("java");
const name = prompt("Unscramble > " + puzzle + " ");

console.log(name);

const result = isCorrect("java", name);

if (result === true){
  console.log("Congrats");
}
else{
  console.log("try again");
}
}

main();
