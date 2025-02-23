// let menu = document.getElementById("nav-menu");
// let btnOpen = document.getElementById("menu-open");
// let btnClose = document.getElementById("menu-close");

// [btnOpen, btnClose].forEach(btn => btn.onclick = () => {
//     menu.classList.toggle("hidden");
//     btnOpen.classList.toggle("hidden");
//     btnClose.classList.toggle("hidden");
// });

// document.addEventListener("DOMContentLoaded", function() {
//     let menu = document.getElementById("nav-menu");
//     let btnOpen = document.getElementById("menu-open");
//     let btnClose = document.getElementById("menu-close");

//     [btnOpen, btnClose].forEach(btn => btn.addEventListener("click", () => {
//         menu.classList.toggle("hidden");
//         btnOpen.classList.toggle("hidden");
//         btnClose.classList.toggle("hidden");
//     }));
// });


// document.addEventListener("DOMContentLoaded", function () {
//     let menu = document.getElementById("nav-menu");
//     let menuToggle = document.getElementById("menu-open");

//     menuToggle.addEventListener("click", function () {
//         menu.classList.toggle("hidden"); // Show/hide menu
//         this.name = this.name === "menu" ? "close" : "menu"; // Toggle icon
//     });
// });

let menuButton = document.getElementById("menu-open");

menuButton.onclick = () => {
    menuButton.name = menuButton.name === "menu" ? "close" : "menu";
};