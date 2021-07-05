$(document).ready(function(){
  'use strict';

  $(window).scroll(function(){

    'use strict';

    if($(window).scrollTop() < 80 ){
      $('.navbar-default').css({
        'background-color':'#17252A',
        'border-color':'transparent'
      });
    }else{
      $('.navbar-default').css({
        'background-color':'#17252A',
        'border-color':"#444"
      });
    }
  });
});
$('#instagram').click(function(){
  window.location.href = "https://www.instagram.com/spandan_nepal/"
});
$('#facebook').click(function(){
  window.location.href = "https://www.facebook.com/spandan.bro"
});
