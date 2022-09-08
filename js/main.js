let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav .links");

toggler.addEventListener("click", () => {
  nav.classList.toggle("show")
});


let navbar = document.querySelectorAll("nav .links .nav-link");


navbar.forEach(el => {
  el.addEventListener("click", function () {
    navbar.forEach(navlink => navlink.classList.remove("active"));
    this.classList.add("active");
  })
})


let changeicon = function (icon) {
  icon.classList.toggle("fa-times");
}


let menu = document.getElementById("content-menu");
let content = document.querySelector(".content")

menu.onclick = function () {
  content.classList.toggle("menu-open");
}

let exit = document.getElementById("Exit");

exit.onclick = function () {
  this.parentElement.classList.remove("menu-open");
}

let doticon = document.getElementById("dots");
let dotmenu = document.querySelectorAll(".warn");
doticon.onclick = function () {
  dotmenu.classList.toggle("openmenu");
};

let bell = document.getElementById("bell-not");
let notfigation = document.querySelector(".notfigation");

bell.onclick = function () {
  notfigation.classList.toggle("open-notfigation")
}