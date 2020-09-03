$(function () {

    'use strict';


    // Tooltips
    $('[data-toggle="tooltip"]').tooltip({
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>'
    });



    // Toggle
    $('.js-toggle').on('click', function (e){
        e.preventDefault();
        $(this).toggleClass('active');
    });



});