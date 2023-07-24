const tombol = document.querySelector("#hero .hero-container .tombol input");
const nav = document.querySelector("#header .container");

tombol.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
