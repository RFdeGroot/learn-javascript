// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorLog = document.getElementById("error")

function error(){
    errorLog.textContent = "Something went wrong, please try again"
}
