import { setLocalStorage, getLocalStorage } from "./utils.js";

let navLinks = document.querySelectorAll(".show-case__nav__wrapper_menu .link");
let activePage = window.location.pathname;
let themeBtn = document.querySelector(".theme_btn");
let langMenu = document.querySelector(".lang ul");
let langBtn = document.querySelector(".lang_btn");
let langSwitchBtns = document.querySelectorAll(".lang_switch_btn");

window.onload = () => {
  let curLang = getLocalStorage("curLang") || null;
  let curTheme = getLocalStorage("curTheme") || null;

  if (curLang)
    curLang === "en"
      ? document.body.removeAttribute("dir")
      : document.body.setAttribute("dir", "rtl");

  document.body.style.visibility = "visible";
};

themeBtn.addEventListener("click", () => {
  document.querySelector("html").classList.toggle("dark");
});

navLinks.forEach((link) =>
  link.href.includes(activePage) ? link.classList.add("active") : null
);

langBtn.addEventListener("click", (e) => langMenu.classList.toggle("active"));

langSwitchBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let btnLang = btn.getAttribute("data-lang");

    if (btnLang === "en") {
      document.body.removeAttribute("dir");
      setLocalStorage("curLang", "en");
    } else {
      document.body.setAttribute("dir", "rtl");
      setLocalStorage("curLang", "ar");
    }

    // Hide Lang Menu After Click
    langMenu.classList.remove("active");
  })
);
