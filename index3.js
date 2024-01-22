const certifcationContainer = document.querySelector(".block-certification");

const titreExperience = document.querySelector(".titre-experience");

titreExperience.addEventListener("click", () => {
  console.log("j'ai cliqué sur le titre exprérience !");
});

const titreClicked = document.querySelector(".titre-emploi");

titreClicked.addEventListener("click", () => {
  titreClicked.classList.add("titre-emploi-clicked");
});
