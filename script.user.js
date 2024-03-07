// ==UserScript==
// @name        Directory Filter - take 2!
// @namespace   Violentmonkey Scripts
// @match       https://www.sonomaacademy.org/about/meet-us-faculty--staff*
// @grant       none
// @version     1.0
// @author      -
// @description 3/6/2024, 12:58:45 PM
// ==/UserScript==


// let init = function(){
//   let directoryElement = document.querySelector("#content_1903384");
//   let p = document.createElement("p");
//   p.innerHTML = "Hello Jay!"
//   p.style.color = "red";
//   p.style.fontWeight = "bold";
//   p.style.fontSize = "36px";

//   directoryElement.prepend(p);


// }

let searchBox = function() {
    let searchBoxElement = document.querySelector("#content_1903384");
    let searchBox = document.createElement("input");
    searchBox.setAttribute("text", "searchBox");
    searchBoxElement.prepend(searchBox);

}


let gatherAltText = function() {
    let altArray = [];
    let listItems = document.querySelectorAll("#content_1903384 > div > div > ul > li");
    for (let i = 0; i < listItems.length; i++) {
        let listItem = listItems[i];
        let links = listItem.querySelectorAll("a");
        if (links.length > 1) {
            altArray.push(links[1].innerHTML);
        }
    }
    console.log(altArray);
}

let addSearchListener = function() {
    let searchBox = document.querySelector("input[name='searchBox']");
    searchBox.addEventListener("input", function() {
        let searchValue = searchBox.value;
        console.log(searchValue);
    });
}

window.addEventListener("load", addSearchListener);






window.addEventListener("load", searchBox);
window.addEventListener("load", gatherAltText);
window.addEventListener("load", init);