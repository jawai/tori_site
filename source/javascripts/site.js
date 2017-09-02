// This is where it all goes :)
//= require jquery
//= require tree .

$(document).ready(function() {
  (function blink() {
    $('.blink_me').fadeOut(1500).fadeIn(100, blink);
  })();

  (function() {
      var burger = document.querySelector('.nav-toggle');
      var menu = document.querySelector('.nav-menu');
      burger.addEventListener('click', function() {
          burger.classList.toggle('is-active');
          menu.classList.toggle('is-active');
      });
  })();
});
