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
    searchBox.setAttribute("type", "text");
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

document.addEventListener("DOMContentLoaded", function() {
    let checkSearchText = function() {
        let searchBox = document.querySelector("#content_1903384 > input");
        if (searchBox) {
            searchBox.addEventListener("input", function() {
                let searchText = searchBox.value;
                console.log(searchText);
            });
        }
    }
});

// window.addEventListener("load", checkSearchText);

// window.addEventListener("load", addSearchListener);






window.addEventListener("load", searchBox);
window.addEventListener("load", gatherAltText);
// window.addEventListener("load", init);