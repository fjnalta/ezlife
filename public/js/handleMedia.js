$(document).ready(function () {
    $("#tabContent").fadeIn("slow", function () {
        $("#loadingSpinner").attr("hidden",true);
        $("#tabContent").attr("hidden",false);
    });
});

function videoButtonClicked(videoId) {
    loadVideo(videoId);
    scrollTo("#currentVideo");
}

function scrollTo(element){
    $('html,body').animate({scrollTop: ($(element).offset().top)},'slow');
}


function loadVideo(videoId) {
    $("#current-video").empty();
    $("#current-video-heading").empty();
    $("#current-video-heading").append("<h2><img src=\"img/logos/stream/youtube.png\" id=\"currentVideo\" style=\"max-height: 50px\">Current Video</h2>");
    $("#current-video").append('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://youtube.com/embed/' + videoId + '" allowfullscreen></iframe></div>');
}

function removeVideo() {
    $("#current-video-heading").empty();
    $("#current-video").empty();
}