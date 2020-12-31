let myHTML = document.querySelector("html");
let myBody = document.querySelector("body");
let myHeading = document.querySelector("h1");
let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHr = document.querySelector("hr");
let myLink = document.querySelectorAll("a");

let Length = myLink.length;

let borderWhite = ", -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff";
let borderBlack = ", -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";

/*** Display change ***/
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "websites/home-page/images/q-icon-3-light.png") {
    // dark mode
    myImage.setAttribute("src", "websites/home-page/images/q-icon-3-dark.png");
    changeEverything("background-dark.jpg", "#000000b0", "#ffffff", "#e9e892af", "#b72121", borderWhite, "#08ff00");
  } else {
    // light mode
    myImage.setAttribute("src", "websites/home-page/images/q-icon-3-light.png");
    changeEverything("background-light.jpg", "#ffffff", "#000000", "#000000", "#e625ec","", "#c51380");
  }
}

function changeEverything(Img, BBgC, BC, BBC, HTSC, Border, LC) {
    /* 
  Img = HTML background image
  BBgC = Body-Background-Color 
  BC = Body-Color
  BBC = Body-Border-Color
  HTSC = Heading-Text-Shadow-Color
  LC = Link-Color
  */
  myHTML.style.backgroundImage = "url(websites/home-page/images/" + Img + ")";
  myBody.style.backgroundColor = BBgC;
  myBody.style.color = BC;
  myBody.style.border =  "5px solid " + BBC;
  myHeading.style.textShadow = "0px 0px 10px " + HTSC + Border;
  
  for(i = 0; i < Length; i++) {
    myLink[i].style.color = LC;
  }
}