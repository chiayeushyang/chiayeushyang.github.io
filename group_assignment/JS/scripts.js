window.addEventListener("scroll", function () {
    var t = document.querySelector("#back-top");
    t.classList.toggle("sticky", window.scrollY > 100);
})