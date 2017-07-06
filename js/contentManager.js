$(document).ready(function() {
    loadContent();
});

// handles direct URL-Browsing
function loadContent() {
    var stateObj = { state: window.location.pathname };
    history.pushState(stateObj, "", window.location.pathname);

    if(window.location.pathname == "/") {
        $("#content").load("content/home.html");

    } else {
        var location = window.location.pathname;

        switch (location) {
            case "/about":
                $("#content").load("content/about.html");
                break;
            case "/contact":
                $("#content").load("content/contact.html");
                break;
            case "/stream":
                $("#content").load("content/stream.html");
                break;
            case "/services":
                $("#content").load("content/services.html");
                break;
            case "/status":
                $("#content").load("content/status.html");
                break;
            case "/development":
                $("#content").load("content/development.html");
                break;
            case "/news":
                $("#content").load("content/news.html");
                break;
            default:
                $("#content").load("content/error.html");
            break;
        }
    }
}

// handles click on Links and content change
function loadSite(content) {
    var stateObj = { state: content };
    switch (content) {
            case "home":
                history.pushState(stateObj, "", "/");
                $("#content").load("content/home.html");
                break;
            case "about":
                history.pushState(stateObj, "", content);
                $("#content").load("content/about.html");
                break;
            case "contact":
                history.pushState(stateObj, "", content);
                $("#content").load("content/contact.html");
                break;
            case "stream":
                history.pushState(stateObj, "", content);
                $("#content").load("content/stream.html");
                break;
            case "services":
                history.pushState(stateObj, "", content);
                $("#content").load("content/services.html");
                break;
            case "status":
                history.pushState(stateObj, "", content);
                $("#content").load("content/status.html");
                break;
            case "news":
                history.pushState(stateObj, "", content);
                $("#content").load("content/news.html");
                break;
            case "development":
                history.pushState(stateObj, "", content);
                $("#content").load("content/development.html");
                break;
    }
}

// TODO - merge these
function loadFooter() {
    $("#footer").load("content/footer.html");
}

function loadCopyright() {
    $("#copyright").load("content/copyright.html");
}

function loadHeader() {
    $("#header").load("content/header.html");
}


