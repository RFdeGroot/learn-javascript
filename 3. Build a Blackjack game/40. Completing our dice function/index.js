// Try to modify the expression so that we get a range from 1 to 6

function rollDice() {
    return Math.floor( Math.random() * 6 ) + 1
}

let dice = rollDice()
console.log(dice)