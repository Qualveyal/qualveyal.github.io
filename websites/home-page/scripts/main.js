let myHTML = document.querySelector("html");
let myBody = document.querySelector("body");
let myHeading = document.querySelector("h1");
let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHr = document.querySelector("hr");
let myLink = document.querySelectorAll("a");

let Length = myLink.length;

// Border for title using shadow
let borderWhite = ", -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff";

/*** Display change ***/
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "websites/home-page/images/q-icon-3-light.png") {
    // Dark mode
    myImage.setAttribute("src", "websites/home-page/images/q-icon-3-dark.png");

    changeImage("background-dark.jpg");
    changeBackgroundColor("#000000b0");
    changeTextColor("#ffffff");
    changeBorderColor("#e9e892af");
    changeTextShadow("#b72121", borderWhite);
    changeLinkColor("#08ff00");

  } else {
    // light mode
    myImage.setAttribute("src", "websites/home-page/images/q-icon-3-light.png");

    changeImage("background-light.jpg");
    changeBackgroundColor("#ffffff");
    changeTextColor("#000000");
    changeBorderColor("#000000");
    changeTextShadow("#e625ec", "");
    changeLinkColor("#c51380");
  }
}

function changeImage(Img) {
  myHTML.style.backgroundImage = "url(websites/home-page/images/" + Img + ")";
}
function changeBackgroundColor(color) {
  myBody.style.backgroundColor = color;
}
function changeTextColor(color) {
  myBody.style.color = color;
}
function changeBorderColor(color) {
  myBody.style.border = "5px solid " + color;
}
function changeTextShadow(color, Border) {
  myHeading.style.textShadow = "0px 0px 10px " + color + Border;
}
function changeLinkColor(color) {
  for(i = 0; i < Length; i++) {  
    myLink[i].style.color = color;
  }
}

// changeImage();
// changeBackgroundColor();
// changeTextColor();
// changeBorderColor();
// changeTextShadow();
// changeLinkColor();