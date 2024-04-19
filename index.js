const certifcationContainer = document.querySelector(".block-certification");

const titreExperience = document.querySelector(".titre-experience");

titreExperience.addEventListener("click", () => {
  console.log("j'ai cliqué sur le titre exprérience !");
});

const emplois = document.querySelectorAll(".titre-emploi");
// console.log(emplois);//

emplois.forEach((emploi) => {
  emploi.addEventListener("click", (e) => {
    emploi.classList.toggle("titre-emploi-clicked");
  });
});

const durees = document.querySelectorAll(".duree");
// console.log(durees); //

/* durees.forEach((duree) => {
  duree.addEventListener("click", () => {
    duree.style.color = "black";
  });
}); */

durees.forEach((duree) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 580) {
      // console.log(window.scrollY); //
      duree.style.color = "rgba(34,108,212)";
    } else {
      duree.style.color = "gray";
    }
  });
});

setTimeout(() => {
  durees.forEach((duree) => {
    duree.style.fontWeight = "390";
  });
}, 10000);

/* let interval = setInterval(() => {
  durees.forEach((duree) => {
    duree.style.color = "rgba(49, 171,220)";
    duree.style.fontWeight = "380";
  });
}, 3000);

dures.forEach((duree) => {
  duree.addEventListener("click", () => {
    clearInterval(interval);
  });
}); */

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

// ********  BURGER  *************************************

let menuBurger = document.querySelector(".myBurger");
console.log(menuBurger);
let openBurger = document.querySelector(".open");
console.log(openBurger);
let closeBurger = document.querySelector(".close");
console.log(closeBurger);

openBurger.onclick = openNav;
closeBurger.onclick = closeNav;

/* ON AFFICHE LE MENU  */

function openNav() {
  menuBurger.classList.add("active");
}

/* ON REPLIE LE MENU  */

function closeNav() {
  menuBurger.classList.remove("active");
}

/* const boxAdmin = document.querySelector(".admin");
console.log(boxAdmin);

window.addEventListener("mousemove", (e) => {
  console.log(e.layerX);

  boxAdmin.style.setProperty("--x", e.layerX + "px");
  boxAdmin.style.setProperty("--y", e.layerY + "px");
}); */

/* const inputName = document.querySelector('input[type="text"]');
// console.log(inputName); //

const selectLanguage = document.querySelector("select");
//console.log(selectLanguage);//

const form = document.querySelector("form");
//console.log(form);//

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
  console.log(cgv.checked);

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
      <p> Pseudo : ${pseudo}</p>
      <p> Language : ${choiceLanguage}</p>`;
  } else {
    alert("Veuillez accepter les cgv");
  }
}); */
