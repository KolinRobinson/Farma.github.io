$(function() { var logo = $(".section_header");
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        if(!logo.hasClass("section_header__small")) {
            logo.hide();
            logo.removeClass('section_header').addClass("section_header__small").fadeIn( "slow");
        }
    } else {
        if(!logo.hasClass("section_header")) {
            logo.hide();
            logo.removeClass("section_header__small").addClass('section_header').fadeIn( "slow");
        }
    }

});
});

$('.burger, .overlay').click(function(){
    $('.burger').toggleClass('burger_active');

});