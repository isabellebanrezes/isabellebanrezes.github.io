const certifcationContainer = document.querySelector(".block-certification");

const titreExperience = document.querySelector(".titre-experience");

titreExperience.addEventListener("click", () => {
  console.log("j'ai cliqué sur le titre exprérience !");
});

const emplois = document.querySelector(".titre-emploi");

emplois.addEventListener("click", () => {
  emplois.classList.toggle("titre-emploi-clicked");
});

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.background = "rgba(34, 108, 212, 0.889)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.background = "rgba(194,196, 198)";
});

const titleFormation = document.querySelector(".titre-formation");

titleFormation.addEventListener("mouseenter", () => {
  titleFormation.style.color = "rgba(129,5,93)";
});

titleFormation.addEventListener("mouseout", () => {
  titleFormation.style.color = "rgba(17,112,175";
});

const titleExperience = document.querySelector(".titre-experience");

titleExperience.addEventListener("mouseover", () => {
  titleExperience.style.color = "rgba(153,37,17)";
});

titleExperience.addEventListener("mouseout", () => {
  titleExperience.style.color = "black";
  /* titleExperience.style.transform = "rotate(-2deg)"; */
});

// Keypress //

/* const keyPress = document.querySelector(".keypress");

const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
}); */

const mainExpe = document.querySelector(".main-experiences");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);//

  if (window.scrollY > 630) {
    mainExpe.style.background = "rgba(196,212,230)";
  } else {
    mainExpe.style.background = "rgb(226, 223, 223)";
  }
});

const inputName = document.querySelector('input[type="text"]');
// console.log(inputName); //

const selectLanguage = document.querySelector("select");
//console.log(selectLanguage);//

const form = document.querySelector("form");
console.log(form);

let pseudo = "";
let choiceLanguage = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  console.log(pseudo);
});

selectLanguage.addEventListener("input", (e) => {
  choiceLanguage = e.target.value;
  console.log(choiceLanguage);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("yes !");
});
