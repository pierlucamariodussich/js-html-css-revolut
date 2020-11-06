$(document).ready(function(){
  $('.content').click(function(){
    $(this).siblings('slot').children(".slot").removeClass('dropdown');
    $(this).children(".slot").toggleClass('dropdown');
  })
})
