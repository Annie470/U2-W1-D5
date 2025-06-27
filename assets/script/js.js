window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const btn = document.querySelector("nav button");
  const altezzaHeader = header.offsetHeight;
  if (window.scrollY > altezzaHeader) {
    nav.classList.add("scroll");
    btn.classList.add("scroll2");
  } else {
    nav.classList.remove("scroll");
    btn.classList.remove("scroll2");
  }
});
