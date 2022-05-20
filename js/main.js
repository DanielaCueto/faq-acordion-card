"use strict";
//constante que contiene list y tiene el addeventlistener.

//constante que contiene li

const arrow = document.getElementsByClassName("cont-arrow");
//console.log(arrow);
/* const imgArrow1 = document.querySelector(".img-arrow1");
console.log(imgArrow1);
const imgArrow2 = document.querySelector(".img-arrow2");
console.log(imgArrow2);
const imgArrow3 = document.querySelector(".img-arrow3");
console.log(imgArrow3);
const imgArrow4 = document.querySelector(".img-arrow4");
console.log(imgArrow4);
const imgArrow5 = document.querySelector(".img-arrow5");
console.log(imgArrow5); */

const imgAccordion = document.getElementsByClassName("img");

const list = document.querySelectorAll("li");
//variable que guarda el elemento que esta abierto.
let currentOpen = undefined;
/*function toggleVisibility() {
  if (currentOpen && currentOpen !== this) {
    currentOpen.classList.toggle("arrowUp", false);
  }
  const opened = this.classList.toggle("arrowUp");
  if (opened) {
    currentOpen = this;
  } else {
    currentOpen = undefined;
  }
  /*item.innerHTML += `<p class="hidden">You can invite up to 2 additional users on the Free plan. There is no limit on 
  team members for the Premium plan.</p>`;
}*/

const toggleVisibility2 = function (ev) {
  //abrir o cerrar el elemento clickado (añadir o quitar clase).
  const clickedElement = ev.currentTarget;
  console.log((clickedElement.style.visibility = "visible"));
  const isAddedClass = clickedElement.classList.toggle("arrowUp");
  //Con este if, se cierra el elemento que estaba abierto anteriormente
  if (currentOpen !== undefined) {
    currentOpen.classList.remove("arrowUp");
  }
  //En este if se actualiza el puntero que apunta al elemento abierto
  if (isAddedClass) {
    currentOpen = clickedElement;
  } else {
    currentOpen = undefined;
  }
};

for (let li of list) li.addEventListener("click", toggleVisibility2);
