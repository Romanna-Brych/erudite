import { initHeader } from "./header.js";
import AOS from "aos";
import "aos/dist/aos.css";

initHeader();

AOS.init({
  duration: 600,
  easing: "ease-out",
  once: true,
  offset: 80,
  disableMutationObserver: true,
  disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
});
