let myHTML = document.querySelector("html");
let myBody = document.querySelector("body");
let myHeading = document.querySelector("h1");
let myImage = document.querySelector("img");
let myButton = document.querySelector("button");

/*** Display change ***/
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "q-icon/images/q-icon-3.png") {
    // dark mode
    myImage.setAttribute("src", "q-icon/images/q-icon-3-2.png");
    changeEverything("#000000", "#26a15e9d", "#ffffff", "#e9e892af", "#f00c0cd2", "#49003f");
  } else {
    // light mode
    myImage.setAttribute("src", "q-icon/images/q-icon-3.png");
    changeEverything("#0d5f2c", "#ec7878", "#000000", "#000000", "#a4ff2db0", "#000000");
  }
}

function changeEverything(HBC, BBgC, BC, BBC, HC, HTSC) { //e9e892af
    /* 
  HBC = Heading-Background-Color 
  BBgC = Body-Background-Color 
  BC = Body-Color
  BBC = Body-Border-Color
  HC = Heading-Color
  HTSC = Heading-Text-Shadow-Color
  */
  myHTML.style.backgroundColor = HBC;
  myBody.style.backgroundColor = BBgC;
  myBody.style.color = BC;
  myBody.style.border =  "5px solid " + BBC;
  myHeading.style.color = HC;
  myHeading.style.textShadow = "5px 3px 1px " + HTSC;
}