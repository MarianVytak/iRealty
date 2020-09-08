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
$('.intro__form .dropdown-item').on('click', function (e) {
    e.preventDefault();
    let thisValue = $(this).attr('href');
    $(thisValue).html($(this).html());
});

$('.intro__form_price_range input').on('change', function () {
    let thisInput = $(this).attr('data-target');
    $(thisInput).text($(this).val());
});


// Change Intro Consist
$('.increment').click(function () {
    let valueElement = $('#' + $(this).siblings('input').attr('id'));
    if ($(this).hasClass('plus')) {
        valueElement.val(Math.max(parseInt(valueElement.val()) + 1));
    } else if (valueElement.val() > 0) // Stops the value going into negatives
    {
        valueElement.val(Math.max(parseInt(valueElement.val()) - 1));
    }
    return false;
});
$('.intro__consist_btn').on('click', function (){
    $('#introConsistParent').text($('#consistParent').val());
    $('#introConsistChildren').text($('#consistChildren').val());
});