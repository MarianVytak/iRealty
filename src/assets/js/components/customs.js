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



    // Custom Scrollbar
    $(window).on('load',function(){
        $('.custom-scrollbar').mCustomScrollbar({
            theme: 'dark'
        });
    });


    // Custom input date range
    let inputDateRange = $('.input-date-range');
    inputDateRange.daterangepicker({
        drops: 'up',
        autoUpdateInput: false,
        autoApply: true,
        locale: {
            cancelLabel: 'Clear',
            "daysOfWeek": [
                "Вс",
                "Пн",
                "Вт",
                "Ср",
                "Чт",
                "Пт",
                "Сб"
            ],
            "monthNames": [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
            "firstDay": 1
        }
    });
    inputDateRange.on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD') + ' - ' + picker.endDate.format('MM/DD'));
    });
    inputDateRange.on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('Даты');
    });



});