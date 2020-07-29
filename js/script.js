$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active');
  });

  $('.menu-sec').click(function(){
    $('nav').toggleClass('active');
  });

});


var date = new Date();
document.getElementById("year").innerHTML = date.getFullYear();








