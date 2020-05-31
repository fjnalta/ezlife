$(document).ready(function () {
    "use strict";
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