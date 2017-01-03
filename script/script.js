$(document).ready(function(){
  $('.project-description').hide();

  $('.project').hover(function () {
    $(this).find('.project-description').toggle('slide');
  })


})
