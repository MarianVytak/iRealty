const cardArrivalsSliderCount = $('.card__arrivals_slider_counter');
const cardArrivalsSlider = $('.card__arrivals_slider');

cardArrivalsSlider.on('init reInit afterChange', function (event, slick, currentSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    let i = (currentSlide ? currentSlide : 0) + 1;
    $(this).find(cardArrivalsSliderCount).html(i + ' / ' + slick.slideCount);
});

cardArrivalsSlider.slick({
    slide: '.card__arrivals_slider_item',
    rows: 0,
    slideToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    arrows:true,
    dots: true
});