// ********  BURGER  *************************************

let myBurger = document.getElementById("burger");
console.log(myBurger);
let openBurger = document.getElementById("openBurger");
console.log(openBurger);
let closeBurger = document.getElementById("closeBurger");
console.log(closeBurger);

openBurger.onclick = openNav;
closeBurger.onclick = closeNav;

/* ON AFFICHE LE MENU  */

function openNav() {
  myBurger.classList.add("active");
}

/* ON REPLIE LE MENU  */

function closeNav() {
  myBurger.classList.remove("active");
}
