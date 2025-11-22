document.addEventListener("DOMContentLoaded", function () {
  console.log("Initializing page");

  initializePage();

  console.log("Initialized page successfully!");

  console.log("Starting loops...");

  window.setInterval(runLoops, 100);

  console.log("Loops running");
});

function runLoops() {
  checkIfOnPhone();
  if (document.getElementById("glitchy")) {
    glitch404();
  }
}
function checkIfOnPhone() {
  const isMobile =
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    );
  if (isMobile || window.innerWidth < 1024) {
    if (window.location.pathname.endsWith("blockedpage.html")) {
      return;
    }

    window.location.href = "blockedpage.html";
    console.log(
      "Blocked phone enter, please use a computer to view this website"
    );
  } else {
    if (window.location.pathname.endsWith("blockedpage.html")) {
      window.location.href = "index.html";
    }
  }
}

function initializePage() {
  console.log("Generating age...");
  let ageCounter = 0;

  const d = new Date("2009-05");

  var seconds = Math.floor((new Date() - d) / 1000);

  var interval = seconds / 31536000;

  ageCounter = Math.floor(interval);

  console.log("Generated age");

  const el = document.getElementById("age");
  if (el) {
    el.innerHTML = ageCounter;
    console.log("Succesfully generated age!");
  } else {
    console.warn("Element with id 'age' not found in the DOM.");
  }
}
function glitch404() {
  const el = document.getElementById("glitchy");

  if (!el) {
    console.warn("Element with id 'glitchy' not found in the DOM.");
    return;
  }

  let randomNumber = Math.floor(Math.random() * 10) + 1;

  let errorCode = "404";

  let error = "Error";

  let style = el.style;

  if (randomNumber >= 2) {
    errorCode = "404";
    style.color = "black";
    style.textShadow = "";
    el.innerHTML = error + " " + errorCode;
  } else if (randomNumber < 2) {
    errorCode =
      "" +
      Math.floor(Math.random() * 10) +
      Math.floor(Math.random() * 10) +
      Math.floor(Math.random() * 10);

    style.color = "#86C232";
    style.textShadow =
      "-1px -1px 0 #347750ff, 1px -1px 0 #347750ff, -1px 1px 0 #347750ff, 1px 1px 0 #347750ff";
    el.innerHTML = error + " " + errorCode;
  }
}

function describeProject(project) {
  var currentProject = project;

  console.log("Selected " + currentProject);

  let targetedParagraph = document.getElementById("projectsinfo");

  let targetedParagraphTitle = document.getElementById("projectsinfotitle");

  if (currentProject == "mastermind") {
    targetedParagraphTitle.innerHTML = "Mastermind";

    targetedParagraph.innerHTML =
      "The Mastermind project is a project i worked on in 2025. Mastermind is a game where a random code is generated, and someone then has to guess what the code is. I programmed this in Java.";
  }
  if (currentProject == "pinkgoose") {
    targetedParagraphTitle.innerHTML = "Pink Goose";

    targetedParagraph.innerHTML =
      "The Pink Goose website is a fictional company's website that i developed using HTML and CSS, this being one of my first time touching those languages";
  }
  if (currentProject == "ovoop") {
    targetedParagraphTitle.innerHTML = "OVOOP";

    targetedParagraph.innerHTML =
      "The OVOOP project is a large public transport program that was coded using java. This is the first time i went further. In Mastermind it was basic code, here it got much more complicated, using the google library called GSON and using OOP (Object Oriented Programming) to make a fully working system with features such as an account system, a game version of it, a display map showing what route you took, a balance system, a travelling system and so much more.";
  }
  if (currentProject == "portfolio") {
    targetedParagraphTitle.innerHTML = "Portfolio";

    targetedParagraph.innerHTML =
      "This is the project you're looking at right now. My Portfolio, my life shown in a simple website. I would say you can get to know me perfectly from this website, however it'd be a lie. To get to know me, you have to meet me.";
  }
}
