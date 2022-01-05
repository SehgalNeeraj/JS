#!/usr/bin/env node

// Find how old are you based on birthdate
const prompt = require('prompt-sync')({siginit:true});
const birthdate = prompt("When is your birthday (yyyy-mm-dd) ? ");
birthday = new Date(birthdate);
console.log(`Your bithday => ${birthday}`)

today = new Date();
console.log(`Today's Date => ${today}`)

diffDays = Math.floor(Math.abs(today - birthday) / (1000 * 60 * 60 * 24)); 
console.log("\n********** Days on Earth **********");
console.log(`You are ${diffDays} days old !`);
