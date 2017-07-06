function loadStreams() {

    $("#streamMenu").load("content/rightNavigation/streamMenu.html");


    generateStreamMenuEntry("svn1337");
    generateStreamMenuEntry("doctornagger");
    generateStreamMenuEntry("eisbert88");
    generateStreamMenuEntry("fjnalta");
}



function generateStreamMenuEntry(name) {
    var bg = null;
    var div = document.createElement("div");
    div.setAttribute("class","panel-body");

    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/streams/' + name,
        headers: {
            'Client-ID': 'mc7zidc56j8y2ebjeab5mexeyz3drw'
        },
        success: function(data) {
            if(data["stream"] == null) {
                getLogoFromChannel(name, "", "off", null, bg);
            } else {
                if(data["stream"]["preview"]["medium"] != null) {
                    bg = data["stream"]["preview"]["medium"];
                }

                if(data["stream"]["channel"]["logo"] == null) {
                    getLogoFromChannel(name, data["stream"]["channel"]["status"], "on", null, bg);
                } else {
                    getLogoFromChannel(name, data["stream"]["channel"]["status"], "on", data["stream"]["channel"]["logo"], bg);
                }
            }
            
        }
    });
}

function getLogoFromChannel(name, title, status, logo, bg) {
    if(logo == null) {
        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/channels/' + name,
            headers: {
                'Client-ID': 'mc7zidc56j8y2ebjeab5mexeyz3drw'
            },
            success: function(data) {
                if(data["logo"] == null) {
                    createEntry(name, title, status, "../img/ezlife/logo.jpg", bg);
                } else {
                    createEntry(name, title, status, data["logo"], bg);
                }
            }
        });
    } else {
        createEntry(name, title, status, logo, bg);
    }
}

function createEntry(name, title, status, logo, background) {

    var panelBody = document.createElement("div");
    panelBody.className = "panel-body img-responsive";

    // set background
    if(background != null) {
        panelBody.style.backgroundImage = "url(" + background + ")";
    } else {
        panelBody.style.backgroundImage = "url(../img/twitch/stream_offline.png)";
    }

    panelBody.style.backgroundSize = "cover";
    panelBody.style.backgroundPosition = "center";
    panelBody.style.maxHeight = "180";
    panelBody.style.minHeight = "180";
    panelBody.style.backgroundRepeat = "no-repeat";

    var row = document.createElement("div");
    row.className = "row";


    var link = document.createElement("a");
    link.setAttribute("href","/stream/" + name);


    var col1 = document.createElement("div");
    col1.className = "col-sm-3";
    var col2 = document.createElement("div");
    col2.className = "col-sm-6";
    var col3 = document.createElement("div");
    col3.className = "col-sm-3";
    
    // Twitch Pic
    var pic1 = document.createElement("img");
    pic1.setAttribute("src", logo);
    pic1.className = "img-responsive";

    col1.appendChild(pic1);
    
    // Stream Title
    var titleText = document.createElement("p");
    titleText.className = "text-center";
    titleText.appendChild(document.createTextNode(title));
    col2.appendChild(titleText);

    // Status
    var pic2 = document.createElement("img");
    pic2.className = "img-responsive";
    if(status == "off") {
        pic2.setAttribute("src", "../img/twitch/icon_offline.png");
    } else {
        pic2.setAttribute("src", "../img/twitch/icon_online.png");
    }
    col3.appendChild(pic2);

    link.appendChild(col1);
    link.appendChild(col2);
    link.appendChild(col3);

    row.appendChild(link);
    panelBody.appendChild(row);
    document.getElementById("stream-panel").appendChild(panelBody);
}




function generateStatusMenu() {
    $("#statusMenu").load("content/rightNavigation/statusMenu.html");
}