$(function() { var logo = $(".section_header");
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 300 && $(window).width() > 1200) {
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

$('.burger, .header_menu').click(function(){
    $('.burger').toggleClass('burger_active');
    $('.header_menu').toggleClass('header_menu_active');

});

$('.lang_item_active').click(function(){
    $('.lang_wrapper').toggleClass('lang_wrapper_active');
    $('.lang_item').toggleClass('lang_item_open');
});

$(function () {
    $('.menu_links').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('menu_links_active');
        }
    });
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        items: 1
    });
});

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.382285, lng: 30.478220},
        zoom: 16,
        panControl: false,
        zoomControl: false,
        scaleControl: false,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: {lat: 50.382285, lng: 30.478220},
        map: map,
        icon: 'img/marker.png'
    });
}