// TODO - load in backend
function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

function createEntry(link, title, date, id) {
    "use strict";
    var myFeed = document.createElement("P");
    var mylink = document.createElement("A");
    mylink.setAttribute('href', link);
    mylink.appendChild(document.createTextNode(title));
    let myDate = parseISOString(date);

    myFeed.appendChild(document.createTextNode(myDate.toLocaleString()));
    myFeed.appendChild(document.createTextNode(" - "));
    myFeed.appendChild(mylink);
    document.getElementById(id + "RSS").appendChild(myFeed);
}

function loadRSS(feed) {
    "use strict";
    var twitchFeed;
    
    switch (feed) {
    case "ezlife":
        twitchFeed = "https://gitlab.ezlife.eu/ajo/ezlife-3.0/commits/master?feed_token=ZxMn5rdQeKQZbvZy55_V&format=atom";
        break;
    case "ezchat":
        twitchFeed = "https://gitlab.ezlife.eu/ajo/ezchat/commits/master?feed_token=ZxMn5rdQeKQZbvZy55_V&format=atom";
        break;
    case "ezchatpush":
        twitchFeed = "https://gitlab.ezlife.eu/ajo/ezchatpush/commits/master?feed_token=ZxMn5rdQeKQZbvZy55_V&format=atom";
        break;
    case "ezchatpc":
        twitchFeed = "https://gitlab.ezlife.eu/ajo/ezchat-pc/commits/master?feed_token=ZxMn5rdQeKQZbvZy55_V&format=atom";
        break;
    case "ezCooking":
        twitchFeed = "https://gitlab.ezlife.eu/ajo/ezcooking/commits/master?feed_token=ZxMn5rdQeKQZbvZy55_V&format=atom";
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