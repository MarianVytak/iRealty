$(document).on('scroll', function(){
    if ($(this).scrollTop() > 140) {
        $('.header-sticky').addClass('active');
        // $('#js-header').css('paddingTop', navHeight);
    } else {
        $('.header-sticky').removeClass('active');
        // $('#js-header').removeAttr('style');
    }
});