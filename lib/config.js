const config = {
    env: {
        appBaseUrl: 'https://ezlife.eu',
        webContentDir: 'public',
        port: 3000,
    },

    // TODO - write backend script for webserver Status
    runtime: {
        webServices: [
            {
                name: 'Cloud',
                site: 'cloud',
                status : true,
                url: 'https://cloud.ezlife.eu'
            },
            {
                name: 'Git',
                site: 'gitlab',
                status: true,
                url: 'https://gitlab.ezlife.eu'
            },
            {
                name: 'Mail',
                site: 'mail.ezlife.eu',
                status: true,
                url:  'https://mail.ezlife.eu'
            },
            {
                name: 'Wiki',
                site: 'wiki',
                status: true,
                url: 'https://wiki.ezlife.eu'
            },
        ]
    }
};

module.exports = config;