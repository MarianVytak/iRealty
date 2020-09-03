$('.header__bot_content_specials').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
    autoplay: false,
    fade: true,
    arrows: true,
    dots: false
});

$('.js-header-search').on('click', function (e) {
    e.preventDefault();
    $('.header__search').toggleClass('active');
});