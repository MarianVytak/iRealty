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



    // View
    $('.js-view').on('click', function (e){
        e.preventDefault();
        let viewContent = $(this).attr('href');
        let viewText = $(this).text();
        $(this).toggleClass('active');
        $(viewContent).slideToggle();
        if (viewText === 'Показать все') {
            $(this).text('Скрыть');
        } else {
            $(this).text('Показать все');
        }
    });



});