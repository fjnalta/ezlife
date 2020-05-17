const config = {
    env: {
        appBaseUrl: 'https://ezlife.eu',
        webContentDir: 'public',
        port: 3000,
        twitchClientID: 'mc7zidc56j8y2ebjeab5mexeyz3drw',
        twitchSecret: 'rtgmqbwga84sex51vxd0nouotva3fa'
    },
    about : {
        name : 'Philipp Minges',
        address: 'Hesselgasse 62',
        town: 'Wiesloch',
        postalCode: '69168',
        country: 'Germany',
        homepage: 'ezlife.eu',
        email: 'fjnalta@gmail.com'
    },
    runtime: {
        recaptcha : '6Lc-tM4UAAAAAN4BMkMix0QM92nh7xodC87vx39p',
        cookies : false,
        services : [
            {
                name : 'ezCloud',
                url : 'https://cloud.ezlife.eu',
                img : '/img/ezlife/ezcloud_logo_with_textmark_dark_outline_v2.svg',
                description : 'Cloud Storage System',
                sponsor : 'nextcloud'
            },
            {
                name : 'ezCooking',
                url : 'https://cooking.ezlife.eu',
                img : '/img/ezlife/ezcooking_logo_with_textmark_dark_outline.svg',
                description : 'Cookbook Web Application',
                sponsor : 'ezlife.eu'
            },
            {
                name : 'ezGit',
                url : 'https://gitlab.ezlife.eu',
                img : '/img/ezlife/ezgit_logo_with_textmark_dark_outline_v3.svg',
                description : 'Version Management System',
                sponsor : 'gitlab'
            },
            {
                name : 'ezMail',
                url : 'https://mail.ezlife.eu',
                img : '/img/ezlife/ezmail logo_with_textmark_dark_outline.svg',
                description : 'Mail Service',
                sponsor : 'postfix - dovecot - roundcube'
            },
            {
                name : 'ezMonitor',
                url : 'https://grafana.ezlife.eu',
                img : '/img/ezlife/ezmonitoring_logo_with_textmark_dark_outline_v2.svg',
                description : 'Monitoring Service',
                sponsor : 'prometheus - grafana'
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
                name: 'ezlife.eu',
                url: 'https://gitlab.ezlife.eu/fjnalta/ezlife-3.0/commits/master?feed_token=ZxMn5rdQeKQZbvZy55_V&format=atom',
                feed: {
                    entry: ''
                }
            },
            {
                id: 'ezlife-idm',
                name: 'ezlife-idm',
                url: 'https://gitlab.ezlife.eu/fjnalta/ezlife-registration-service/commits/master?feed_token=ss_6n_mqvd8qzfHMprWG&format=atom',
                feed: {
                    entry: ''
                }
            },
            {
                id: 'ezcooking',
                name: 'ezCooking',
                url: 'https://gitlab.ezlife.eu/fjnalta/ezcooking/commits/master?feed_token=ZxMn5rdQeKQZbvZy55_V&format=atom',
                feed: {
                    entry: ''
                }
            },
            {
                id: 'ezchat-android',
                name: 'ezChat Android Client',
                url: 'https://gitlab.ezlife.eu/fjnalta/ezchat/commits/master?feed_token=ZxMn5rdQeKQZbvZy55_V&format=atom',
                feed: {
                    entry: ''
                }
            },
            {
                id: 'ezchat-rest',
                name: 'ezChat REST Services',
                url: 'https://gitlab.ezlife.eu/fjnalta/ezchatpush/commits/master?feed_token=ZxMn5rdQeKQZbvZy55_V&format=atom',
                feed: {
                    entry: ''
                }

            },
            {
                id: 'ezchat-pc',
                name: 'ezChat PC Client',
                url: 'https://gitlab.ezlife.eu/fjnalta/ezlife-chat/commits/master?feed_token=ZxMn5rdQeKQZbvZy55_V&format=atom',
                feed: {
                    entry: ''
                }
            }
        ]
    }
};

module.exports = config;