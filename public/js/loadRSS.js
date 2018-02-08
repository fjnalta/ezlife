function createEntry(link, title, date, id) {
    "use strict";
    var myFeed = document.createElement("P");
    var mylink = document.createElement("A");
    mylink.setAttribute('href', link);
    mylink.appendChild(document.createTextNode(title));
    myFeed.appendChild(document.createTextNode(date));
    myFeed.appendChild(document.createTextNode(" - "));
    myFeed.appendChild(mylink);
    document.getElementById(id + "RSS").appendChild(myFeed);
    console.log(id + "RSS");
}

function loadRSS(feed) {
    "use strict";
    var twitchFeed;
    
    switch (feed) {
    case "ezlife":
        twitchFeed = "https://ezlife.eu/apps/gitlab/philippm/ezlife-3.0/commits/master?format=atom";
        break;
    case "ezchat":
        twitchFeed = "https://ezlife.eu/apps/gitlab/philippm/ezChat/commits/master?format=atom";
        break;
    case "ezchatpush":
        twitchFeed = "https://ezlife.eu/apps/gitlab/philippm/ezChatPush/commits/master?format=atom";
        break;
    case "ezchatpc":
        twitchFeed = "https://ezlife.eu/apps/gitlab/philippm/ezChat-PC/commits/master?format=atom";
        break;
    default:
        break;
    }

    $.ajax(twitchFeed, {
        accepts: {
            xml: "application/xml"
        },
        dataType: "xml",
        success: function (data) {
            $(data).find("entry").slice(0, 10).each(function () {
                var el = $(this);
                createEntry(el.find("id").text(), el.find("title").text(), el.find("updated").text(), feed);
            });
        }
    });
}