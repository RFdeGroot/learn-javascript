// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    console.log(count)
    countEl.innerText = count

}


