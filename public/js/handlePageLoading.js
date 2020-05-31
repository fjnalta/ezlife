$(document).ready(function () {
    "use strict";
    // Fade in content if ready
    $('#main-content').fadeIn('slow');
    $('#footer').fadeIn('slow');
    $('#signature').fadeIn('slow');

    // Fades out page on user input
    $('.ezlife-link').click(function(e) {
        e.preventDefault();
        let newLocation = this.href;

        function newpage() {
            window.location = newLocation;
        }
        $('#main-content').fadeOut('slow', newpage);
        $('#footer').fadeOut('slow');
        $('#signature').fadeOut('slow');
        $('#loadingSpinner').fadeIn('slow');
    });
});