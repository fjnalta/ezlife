function streamButtonClicked(stream) {
    loadStream(stream);
    loadStreamChat(stream);
    scrollTo("#currentStream");
}

function scrollTo(element){
    $('html,body').animate({scrollTop: ($(element).offset().top)},'slow');
}

function loadStream(stream) {
    $("#current-stream").empty();
    $("#current-stream-heading").empty();
    $("#current-stream-heading").append("<h2><img src=\"img/logos/stream/twitch.png\" id=\"currentStream\" style=\"max-height: 50px\"> Stream - " + stream + "</h2>");
    $("#current-stream").append("<div class=\"embed-responsive embed-responsive-16by9\" id=\"twitch-player\"></div>\n" +
        "<script type=\"text/javascript\">\n" +
        "var options = {\n" +
        "height: 300,\n" +
        "channel: '" + stream + "'};" +
        "var player = new Twitch.Player(\"twitch-player\", options);\n" +
        "player.setVolume(0.5);\n" +
        "</script>");
}

function loadStreamChat(stream) {
    $("#current-stream-chat").empty();
    $("#current-stream-chat").append("<iframe frameborder=\"0\"\n" +
        "scrolling=\"no\"\n" +
        "id=\"chat_embed\"\n" +
        "src=\"https://www.twitch.tv/embed/" + stream + "/chat?parent=ezlife.eu\"\n" +
        "height=\"100%\"\n" +
        "width=\"100%\">\n" +
        "</iframe>");
}