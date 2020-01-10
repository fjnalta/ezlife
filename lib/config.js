const config = {
    env: {
        appBaseUrl: 'https://ezlife.eu',
        webContentDir: 'public',
        port: 3000,
        twitchClientID: 'mc7zidc56j8y2ebjeab5mexeyz3drw'
    },
    about : {
        name : 'Philipp Minges',
        address: 'Hesselgasse 62',
        town: 'Wiesloch',
        postalCode: '69168',
        country: 'Germany',
        homepage: 'ezlife.eu',
        email: 'trash@ezlife.eu'
    },

    runtime: {
        services : [
            {
                name : 'ezCloud',
                url : 'https://cloud.ezlife.eu',
                img : '/img/ezlife/logo_with_textmark.svg'
            },
            {
                name : 'ezCooking',
                url : 'https://cooking.ezlife.eu',
                img : '/img/ezlife/logo_with_textmark.svg'
            },
            {
                name : 'ezGit',
                url : 'https://gitlab.ezlife.eu',
                img : '/img/ezlife/logo_with_textmark.svg'
            },
            {
                name : 'ezMail',
                url : 'https://mail.ezlife.eu',
                img : '/img/ezlife/ezmail_logo_with_textmark.svg'
            }

        ],
        twitchStreams: [
            {
                name: 'ironm4n89',
                game: 'n/a',
                img: '/img/twitch/stream_offline.png',
                description: 'offline',
                online: false
            },
            {
                name: 'fjnalta',
                game: 'n/a',
                img: '/img/twitch/stream_offline.png',
                description: 'offline',
                online: false
            },
            {
                name: 'Borgreon',
                game: 'n/a',
                img: '/img/twitch/stream_offline.png',
                description: 'offline',
                online: false
            },
            {
                name: 'KneeDeepHxD',
                game: 'n/a',
                img: '/img/twitch/stream_offline.png',
                description: 'offline',
                online: false
            },
            {
                name: 'svN1337',
                game: 'n/a',
                img: '/img/twitch/stream_offline.png',
                description: 'offline',
                online: false
            },
            {
                name: 'schwestaschwesta',
                game: 'n/a',
                img: '/img/twitch/stream_offline.png',
                description: 'offline',
                online: false
            },
            {
                name: 'DemNice',
                game: 'n/a',
                img: '/img/twitch/stream_offline.png',
                description: 'offline',
                online: false
            },
            {
                name: 'mugiwara',
                game: 'n/a',
                img: '/img/twitch/stream_offline.png',
                description: 'offline',
                online: false
            }
        ],
        appServices: [
            {
                name: 'Teamspeak',
                status: true,
                url: 'https://ezlife.eu/services#Teamspeak'
            },
            {
                name: 'Minecraft',
                status: 'true',
                url: 'https://ezlife.eu/services#Minecraft'
            }
        ],
        gitUrls: [
            {
                id: 'ezlife',
                name: 'ezlife',
                url: 'https://gitlab.ezlife.eu/ajo/ezlife-3.0/commits/master?feed_token=ZxMn5rdQeKQZbvZy55_V&format=atom',
                feed: {
                    entry: ''
                }
            },
            {
                id: 'ezcooking',
                name: 'ezCooking',
                url: 'https://gitlab.ezlife.eu/ajo/ezcooking/commits/master?feed_token=ZxMn5rdQeKQZbvZy55_V&format=atom',
                feed: {
                    entry: ''
                }
            },
            {
                id: 'ezchat-android',
                name: 'ezChat Android Client',
                url: 'https://gitlab.ezlife.eu/ajo/ezchat/commits/master?feed_token=ZxMn5rdQeKQZbvZy55_V&format=atom',
                feed: {
                    entry: ''
                }
            },
            {
                id: 'ezchat-rest',
                name: 'ezChat REST Services',
                url: 'https://gitlab.ezlife.eu/ajo/ezchatpush/commits/master?feed_token=ZxMn5rdQeKQZbvZy55_V&format=atom',
                feed: {
                    entry: ''
                }

            },
            {
                id: 'ezchat-pc',
                name: 'ezChat PC Client',
                url: 'https://gitlab.ezlife.eu/ajo/ezlife-chat/commits/master?feed_token=ZxMn5rdQeKQZbvZy55_V&format=atom',
                feed: {
                    entry: ''
                }
            }
        ]
    }
};

module.exports = config;