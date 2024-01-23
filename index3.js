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
  mousemove.style.background = "blue";
});

window.addEventListener("mouseup", () => {
  mousemove.style.background = "grey";
});

const titleFormation = document.querySelector(".titre-formation");

titleFormation.addEventListener("mouseenter", () => {
  titleFormation.style.color = "green";
});

titleFormation.addEventListener("mouseout", () => {
  titleFormation.style.color = "black";
});

const titleExperience = document.querySelector(".titre-experience");

titleExperience.addEventListener("mouseover", () => {
  titleExperience.style.color = "red";
});

titleExperience.addEventListener("mouseout", () => {
  titleExperience.style.color = "black";
});

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
