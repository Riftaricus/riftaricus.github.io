document.addEventListener('DOMContentLoaded', function() {
    console.log("Initializing page")

    initializePage()

    console.log("Initialized page successfully!")

    console.log("Starting loops")

    if (document.getElementById('glitchy')){
        window.setInterval(glitch404, 100)
    }

});

function initializePage(){

    console.log("Encrypting email against bots")

    var emailE = 'student.roc-nijmegen.nl'
    var emailE = ('1216770' + "@" + emailE)

    let emailHTML = document.getElementById('contactemail')

    emailHTML.innerHTML = ('<a href="mailto:' + emailE + '">' + emailE + '</a>')

    console.log("Succesfully encrypted email against bots")

    console.log("Generating age...")
    let ageCounter = 0

    const d = new Date("2009-05")

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

    if (!el){
        console.warn("Element with id 'glitchy' not found in the DOM.")
        return
    }

    let randomNumber = Math.floor(Math.random() * 10) + 1

    let errorCode = "404"

    let error = "Error"

    let style = el.style
    


    if (randomNumber >= 2){
        errorCode = "404"
        style.color = "black"
        style.textShadow = ""
        el.innerHTML = error + " " + errorCode
    } else if (randomNumber < 2){

        errorCode = "" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)

        style.color = "#86C232"
        style.textShadow = "-1px -1px 0 #347750ff, 1px -1px 0 #347750ff, -1px 1px 0 #347750ff, 1px 1px 0 #347750ff"
        el.innerHTML = error + " " + errorCode


    }
}
