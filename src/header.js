export function initHeader() {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");

  if (!burger || !nav) return;

  const controller = new AbortController();
  const { signal } = controller;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Відкрити меню");
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    nav.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Закрити меню");
    document.body.style.overflow = "hidden";
  };

  burger.addEventListener(
    "click",
    () => {
      const isOpen = burger.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    },
    { signal },
  );

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu, { signal });
  });

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        burger.focus();
      }
    },
    { signal },
  );

  document.addEventListener(
    "click",
    (event) => {
      if (
        nav.classList.contains("is-open") &&
        !nav.contains(event.target) &&
        !burger.contains(event.target)
      ) {
        closeMenu();
      }
    },
    { signal },
  );

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    },
    { signal },
  );

  return () => {
    closeMenu();
    controller.abort();
  };
}
