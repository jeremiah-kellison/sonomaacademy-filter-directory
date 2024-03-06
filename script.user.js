// ==UserScript==
// @name        Directory Filter - take 2!
// @namespace   Violentmonkey Scripts
// @match       https://www.sonomaacademy.org/about/meet-us-faculty--staff*
// @grant       none
// @version     1.0
// @author      -
// @description 3/6/2024, 12:58:45 PM
// ==/UserScript==


let init = function(){
  let directoryElement = document.querySelector("#content_1903384");
  let p = document.createElement("p");
  p.innerHTML = "Hello Jay!"
  p.style.color = "red";
  p.style.fontWeight = "bold";
  p.style.fontSize = "36px";

  directoryElement.prepend(p);


}

let nameArray = function(){
    let nameArray = [];
    let images = document.querySelectorAll("#content_1903384 > div > div > ul > li > a > img    ");
    let imageAlt = images.alt;
    nameArray.push(imageAlt);
    
    console.log(nameArray);
}

window.addEventListener("load", nameArray);