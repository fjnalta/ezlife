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
        twitchStreams: [
            {
                name: 'ironm4n89',
                game: 'n/a',
                img: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-100x100.jpg',
                description: 'offline',
                online: false
            },
            {
                name: 'fjnalta',
                game: 'n/a',
                img: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-100x100.jpg',
                description: 'offline',
                online: false
            },
            {
                name: 'Borgreon',
                game: 'n/a',
                img: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-100x100.jpg',
                description: 'offline',
                online: false
            },
            {
                name: 'KneeDeepHxD',
                game: 'n/a',
                img: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-100x100.jpg',
                description: 'offline',
                online: false
            },
            {
                name: 'svN1337',
                game: 'n/a',
                img: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-100x100.jpg',
                description: 'offline',
                online: false
            },
            {
                name: 'schwestaschwesta',
                game: 'n/a',
                img: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-100x100.jpg',
                description: 'offline',
                online: false
            },
            {
                name: 'DemNice',
                game: 'n/a',
                img: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-100x100.jpg',
                description: 'offline',
                online: false
            },
            {
                name: 'mugiwara',
                game: 'n/a',
                img: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-100x100.jpg',
                description: 'offline',
                online: false
            }
        ],

        // TODO - write backend script for web server Status
        webServices: [
            {
                name: 'Cooking',
                site: 'cooking',
                status : true,
                url: 'https://cooking.ezlife.eu'
            },
            {
                name: 'Cloud',
                site: 'cloud',
                status : true,
                url: 'https://cloud.ezlife.eu'
            },
            {
                name: 'GitLab',
                site: 'gitlab',
                status: true,
                url: 'https://gitlab.ezlife.eu'
            },
            {
                name: 'Mail',
                site: 'mail.ezlife.eu',
                status: true,
                url:  'https://mail.ezlife.eu'
            }
        ],
        appServices: [
            {
                name: 'Chat',
                status: false,
                url: 'https://ezlife.eu/chat'
            },
            {
                name: 'Chat - Push Service',
                status: false,
                url: 'https://ezlife.eu/chat'
            },
            {
                name: 'Teamspeak',
                status: true,
                url: 'https://ezlife.eu/services#Teamspeak'
            },
            {
                name: 'Discord',
                status: true,
                url: 'https://ezlife.eu/services#Discord'
            }
        ],
        gameServices: [
            {
                name: 'Minecraft',
                status: 'true',
                url: 'https://ezlife.eu/services#Minecraft'
            }
        ]
    }
};

module.exports = config;