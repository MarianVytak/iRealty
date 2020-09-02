const sliderCountCounter = $('.slider__count_counter');
const sliderCount = $('.slider__count');

sliderCount.on('init reInit afterChange', function (event, slick, currentSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    let i = (currentSlide ? currentSlide : 0) + 1;
    $(this).find(sliderCountCounter).html(i + ' / ' + slick.slideCount);
});

sliderCount.slick({
    slide: '.slider__count_item',
    rows: 0,
    slideToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    arrows:true,
    dots: true
});