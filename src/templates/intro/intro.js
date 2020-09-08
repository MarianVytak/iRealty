// Intro Slider
$('.intro__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 10000,
    fade: true,
    arrows: false,
    dots: true
});

// Slide 2 Slider
$('.slide-2__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 10000,
    fade: true,
    arrows: true,
    dots: true
});

// Intro Form Dropdown Text
$('.intro__form .dropdown-item').on('click', function (e){
    e.preventDefault();
    let thisValue = $(this).attr('href');
    $(thisValue).html($(this).html());
});

$('.intro__form_price_range input').on('change', function (){
    let thisInput = $(this).attr('data-target');
    $(thisInput).text($(this).val());
});