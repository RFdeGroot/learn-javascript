// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

let firstCard = getRandomIntInclusive(2,11)
let secondCard = getRandomIntInclusive(2,11)

console.log(firstCard)
console.log(secondCard)
// 2. Create a variable, sum, and set it to the sum of the two cards

let sum = firstCard + secondCard
console.log(sum)
