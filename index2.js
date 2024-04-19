// ********  BURGER  *************************************

let menuBurger = document.querySelector(".burger");
console.log(menuBurger);
let menuOpen = document.querySelector(".open");
console.log(menuOpen);
let menuClose = document.querySelector(".close");
console.log(menuClose);

menuOpen.onclick = openNav;
menuClose.onclick = closeNav;

/* ON AFFICHE LE MENU  */
function openNav() {
  menuBurger.classList.add("active");
}

/* ON REPLIE LE MENU  */
function closeNav() {
  menuBurger.classList.remove("active");
}
