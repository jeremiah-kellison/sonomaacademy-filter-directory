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
};

let searchBox = function () {
  let searchBoxElement = document.querySelector("#content_1903384");
  let searchBox = document.createElement("input");
  searchBox.setAttribute("type", "text");
  searchBoxElement.prepend(searchBox);

  searchBox.addEventListener("input", function () {
    let filter = searchBox.value.toUpperCase();
    for (let i = 0; i < liArray.length; i++) {
      let txtValue = liArray[i].innerText;
      if (txtValue.toUpperCase().startsWith(filter)) {
        liArray[i].style.display = "";
      } else {
        liArray[i].style.display = "none";
      }
    }
  });
};

let liArray = [];
let ulArray = [];

let gatherLiText = function () {
  let listItems = document.querySelectorAll(
    "#content_1903384 > div > div > ul > li"
  );
  for (let i = 0; i < listItems.length; i++) {
    liArray.push(listItems[i]);
    console.log(liArray);
  }
};

window.addEventListener("load", setGridTemplateColumns);
window.addEventListener("load", searchBox);
window.addEventListener("load", gatherLiText);
