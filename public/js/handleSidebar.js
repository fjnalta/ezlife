$(document).ready(function () {
    "use strict";

    let fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');

        // if($('#sidebar').hasClass('active')) {
        //     $('#cookbookSidebar').text('');
        // } else {
        //     $('#cookbookSidebar').text(' Cookbook');
        // }
    });
});