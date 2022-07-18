import { Kaitlente } from "./Kaitlente.js";

const h1El = document.querySelector(".main-title");

const skyleEl = document.querySelector(".top > .skyle");

const kaitlenciuKiekis = 5;

for (let i = 1; i <= kaitlenciuKiekis; ++i) {
  const irenginis = new Kaitlente(i);
  irenginis.render();
}

document.querySelector("main").childNodes[0].remove();

if (kaitlenciuKiekis % 2 === 0) {
  h1El.classList.add("bold");
}
