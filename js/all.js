$(document).ready(function() {
    $('.showmenu').on('click', function(e){
      e.preventDefault();
      $('.menu').toggleClass('menu-show');
    });

    $('.register').on('click', function(e){
      e.preventDefault();
      $(".login-content").fadeOut(25);
      $(".register-content").fadeIn(200);
    });

    $('.text-href').on('click', function(e){
      e.preventDefault();
      $(".register-content").fadeOut(25);
      $(".login-content").fadeIn(200);
    });
  });