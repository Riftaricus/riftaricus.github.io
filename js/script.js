document.addEventListener('DOMContentLoaded', function() {
    console.log("Initializing page")

    initializePage()

    console.log("Initialized page successfully!")

    console.log("Starting loops")

    window.setInterval(glitch404, 100)
});

function initializePage(){

    console.log("Generating age...")
    let ageCounter = 0

    const d = new Date("2009-05-19")

    var seconds = Math.floor((new Date() - d) / 1000)

    var interval = seconds / 31536000

    ageCounter = Math.floor(interval)


    console.log("Generated age")

    const el = document.getElementById("age")
    if (el) {
        el.innerHTML = ageCounter
        console.log("Succesfully generated age!")
    } else {
        console.warn("Element with id 'age' not found in the DOM.")
    }
}
function glitch404(){
    const el = document.getElementById("glitchy")

    let randomNumber = Math.floor(Math.random() * 10) + 1

    let errorCode = "404"

    let error = "Error"

    let style = el.style

    if (randomNumber >= 2){
        errorCode = "404"
        style.color = "black"
        style.textShadow = ""
    } else if (randomNumber < 2){

        errorCode = "" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)

        style.color = "#86C232"
        style.textShadow = "-1px -1px 0 #347750ff, 1px -1px 0 #347750ff, -1px 1px 0 #347750ff, 1px 1px 0 #347750ff"



    }
    if (el) {
        el.innerHTML = error + " " + errorCode
    }else{
        console.warn("Element with id 'glitchy' not found in the DOM.")
    }
}

