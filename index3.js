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
  titleFormation.style.color = "rgba(3,93,151)";
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
});
