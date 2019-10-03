/*
    1. Use JavaScript to obtain a reference to the first section with the class of article_header 
        and change its text with the textContent property to "Welcome to the {insert your name here} blog"
    2. Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
    3. Obtain a reference the element with a class of dashed and remove it.
    4. Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
*/

// 1.
let firstHeader = document.querySelectorAll(".article__header")[0];
firstHeader.textContent = "Welcome to Jameka Echols Blog";

// 2. 
const allHeaders = document.querySelectorAll(".article__header");
// use the spread operator to place the Nodes from the querySelectorAll into an array and loop 
// through them to change the classList 
[...allHeaders].forEach(header => {
    header.classList = "!important" // will cause the override of the .dashed style from being removed on line 23
})

// 3.
let dashed = document.querySelector(".dashed");
dashed.classList.remove("dashed");

// 4.
let footer = document.querySelector(".article__footer");
footer.classList = "goldenrod";
