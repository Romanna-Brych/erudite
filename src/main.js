import { initHeader } from "./header.js";

initHeader();

import logoUrl from "./assets/erudite-logo-yellow.svg";

const logo = document.querySelector(".header__logo img");

if (logo) {
  logo.src = logoUrl;
}
