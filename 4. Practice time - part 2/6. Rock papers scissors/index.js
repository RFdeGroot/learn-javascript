let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomItem() {
    let n = Math.floor( Math.random() * hands.length )
    return hands[n]
    
}

let game = randomItem()
console.log(game)
