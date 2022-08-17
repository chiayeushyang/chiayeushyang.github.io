document.addEventListener("DOMContentLoaded", function(){
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