
function reader() {
let menuOpen = true;



function toggleMenu() {

  // Toggle the "menu--open" class on your menu refence. 
  if (menuOpen === true) {
   // menu.classList.toggle("menu--close");
  menu.classList.toggle("menu--open");  
  menuOpen = false;
  } else {
   // menu.classList.toggle("menu--open");
   menu.classList.toggle("menu--open"); 
   menuOpen = true;  
  }
 }

// Start Here: Create a reference to the ".menu" class
let menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);

let anchor = document.createElement('a');
anchor.className = "link";
anchor.innerHTML = "Students";

anchor.addEventListener("click", btnClick);

let li = document.querySelector("li");
li.innerHTML = "";
li.appendChild(anchor);


function btnClick() {
  console.log("click");
}


};



reader();
