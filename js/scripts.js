$(document).ready(function(){
  // Nav bar button collapse
  $(".button-collapse").sideNav();

  /// typed js function
  $(function(){
        $(".typed-text").typed({
            strings: ["a developer.", "a designer.", "a problem solver :)"],
            typeSpeed: 50
        });
    });

    $('.parallax').parallax();

    // $('#headline').stick_in_parent();

    // Make Reveal animate up and display none when mouseleave
    $(document).on('mouseenter.hover-reveal','.hover-reveal', function (e){
          $(e.target).closest('.card').css('overflow', 'hidden');
          $(this).find('.card-content>span').attr('style', 'color: rgba(0,0,0,0) !important');
          $(this).find('.card-reveal').css({ display: 'block'})
            .velocity("stop", true)
            .velocity({translateY: '-100%'},
            {duration: 400,
             queue: false,
             easing: 'easeOutBounce'});
        });

    // Make Reveal animate down and display none when mouseleave
    $(document).on('mouseleave.hover-reveal','.hover-reveal', function (e){
      $(this).find('.card-reveal').velocity(
        {translateY: 0}, {
          duration: 225,
          queue: false,
          easing: 'easeOutBounce',
          complete: function() { $(this).css({ display: 'none'}); }
        }
      );
      $(this).find('.card-content>span').attr('style', '');
    });
});
