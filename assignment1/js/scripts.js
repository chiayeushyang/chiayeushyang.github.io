window.addEventListener("scroll", function(){
    var h = document.querySelector("#menu");
    var t = document.querySelector("#back-top");
    h.classList.toggle("sticky", window.scrollY > 0);
    t.classList.toggle("sticky", window.scrollY > 100);
})

function myFunction() {
    var main = document.querySelector("#menu-main");
    var home = document.querySelector("#menu-home");
    var logo= document.querySelector("#menu-logo");
    main.classList.toggle("responsive");
    home.classList.toggle("responsive");
    logo.classList.toggle("responsive");

    var x = document.getElementById("icon");
            if (x.className === "fa-solid fa-bars") {
                x.className = "fa-solid fa-xmark fa-beat";
            } else {
                x.className = "fa-solid fa-bars";
            }
}