$(document).ready(function(){

  $('.menu > ul > li').click(function(){
    console.log('ciao');

    if( $(this).children('.dropdown').hasClass('active')){
      $(this).children('.dropdown').removeClass('active');
    } else {
      $('.dropdown').removeClass('active');
      $(this).children('.dropdown').addClass('active');
      
    }

  })

})
