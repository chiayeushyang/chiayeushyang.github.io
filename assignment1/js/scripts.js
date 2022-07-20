window.addEventListener("scroll", function () {
    var h = document.querySelector("#menu");
    var t = document.querySelector("#back-top");
    h.classList.toggle("sticky", window.scrollY > 0);
    t.classList.toggle("sticky", window.scrollY > 100);
})

function myFunction() {
    var main = document.querySelector("#menu-main");
    var home = document.querySelector("#menu-home");
    var logo = document.querySelector("#menu-logo");
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

if($(window).innerWidth() > 992){
        $(coco).hover(function () {
            $(img1).css("display", "block");
        }, function () {
            $(img1).css("display", "none");
        })
        $(pacman).hover(function () {
            $(img2).css("display", "block");
        }, function () {
            $(img2).css("display", "none");
        })
        $(wizard).hover(function () {
            $(img3).css("display", "block");
        }, function () {
            $(img3).css("display", "none");
        })
        $(elephant).hover(function () {
            $(img4).css("display", "block");
        }, function () {
            $(img4).css("display", "none");
        })
} 
