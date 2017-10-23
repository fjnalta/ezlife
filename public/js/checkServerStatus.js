function checkServerStatus(url, name) {
    $.ajax({url: url,
        type: "HEAD",
        timeout:1000,
        statusCode: {
            200: function (response) {
                createServerEntry(name, true);
            },
            400: function (response) {
                createServerEntry(name, false);
            },
            0: function (response) {
                createServerEntry(name, false);
            }
        }
    });
}

function createServerEntry(name, status) {
    var statusPanel = document.getElementById("status-panel");

    var div = document.createElement("div");
    div.className = "panel-body img-responsive";

    // set background
    div.style.backgroundImage = "url(img/server/" + name + ".jpg)";
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";
    div.style.maxHeight = "110";
    div.style.backgroundRepeat = "no-repeat";


    var col1 = document.createElement("div");
    col1.className = "col-xs-10";
    var col2 = document.createElement("div");
    col2.className = "col-xs-2";

    var titleText = document.createElement("p");
//    titleText.appendChild(document.createTextNode(name));
//    col1.appendChild(titleText);


    var statusIcon = document.createElement("img");
//    statusIcon.className = "img-responsive";
    if(status) {
        statusIcon.setAttribute("src", "img/twitch/icon_online.png");
    } else {
        statusIcon.setAttribute("src", "img/twitch/icon_offline.png");
    }

    col2.appendChild(statusIcon);

    div.appendChild(col1);
    div.appendChild(col2);

    statusPanel.appendChild(div);
}

