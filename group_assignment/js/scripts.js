window.addEventListener("scroll", function () {
  var top = document.querySelector("#back-top");
  top.classList.toggle("sticky", window.scrollY > 100);
})




// https://bootstrap-menu.com/detail-autohide.html
document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            let menu_collapse = document.querySelector('[aria-expanded]')?.getAttribute('aria-expanded')
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else if(scroll_top > 100){
                if(menu_collapse == "false"){
                  el_autohide.classList.remove('scrolled-up');
                  el_autohide.classList.add('scrolled-down');
                }
            }
            last_scroll_top = scroll_top;
      }); 
    }

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    function checkCardHover(){
      let card = document.getElementsByClassName('card')
      let check; 
      $(card).each(function() {
        if(this.parentElement.querySelector(':hover') === this){
          check = true;
        }
      })
      if (check){
        return true;
      }
    }

    let count = 0;
    var myInterval;
    document.addEventListener('mousemove', function checkHover() {
      const hovered = checkCardHover();
      if (hovered) {
        clearInterval(myInterval);
        count = 0;
      }else{
        count += 1;
        if (count == 1){
          myInterval = setInterval(everyTime, 5000);
        }
      }
    });
}); 

function everyTime () {
  timer = 1000;
  let card = document.getElementsByClassName("card")
  $(card).each(function() {
      var icon = $(this);

      setTimeout(function() {
          icon.addClass('hover');
      }, timer);
      timer += 1000;

      setTimeout(function() {
          icon.removeClass('hover');
      }, timer);

  });
}

/* Fancybox */
Fancybox.bind('[data-fancybox="gallery"]', {

  Image: {
    zoom: true,
    click: true,
    wheel: "slide",
  },
});
/* Fancybox */
