// ==UserScript==
// @name        Directory Filter - take 2!
// @namespace   Violentmonkey Scripts
// @match       https://www.sonomaacademy.org/about/meet-us-faculty--staff*
// @grant       none
// @version     1.0
// @author      -
// @description 3/6/2024, 12:58:45 PM
// ==/UserScript==




let setGridTemplateColumns = function () {
    let ulElements = document.querySelector("#content_1903384 > div > div > ul");
        ulElements.style.gridTemplateColumns = "repeat(5,18%)";
   
}

let searchBox = function () {
    let searchBoxElement = document.querySelector("#content_1903384");
    let searchBox = document.createElement("input");
    searchBox.setAttribute("type", "text");
    searchBoxElement.prepend(searchBox);


    searchBox.addEventListener('input', function () {
        let filter = searchBox.value.toUpperCase();
        for (let i = 0; i < altArray.length; i++) {
            let txtValue = altArray[i].innerText;
            if (txtValue.toUpperCase().startsWith(filter )) {
                altArray[i].style.display = "";
               
            } else {
                altArray[i].style.display = "none";
               
            }
        }
    });
}

let altArray = [];
let ulArray = [];

let gatherAltText = function () {
    let listItems = document.querySelectorAll("#content_1903384 > div > div > ul > li");
    for (let i = 0; i < listItems.length; i++) {
        altArray.push(listItems[i]);
        console.log(altArray);
    }
}

 




window.addEventListener("load", setGridTemplateColumns)
window.addEventListener("load", searchBox);
window.addEventListener("load", gatherAltText);
