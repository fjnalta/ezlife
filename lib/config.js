const config = {
    env: {
        appBaseUrl: 'https://ezlife.eu',
        webContentDir: 'public',
        port: 3000,
    },

    runtime: {
        webServices: [
            {
                name: 'Gitlab',
                site: 'gitlab',
                status: false,
                url: 'https://gitlab.ezlife.eu'
            },
            {
                name: 'Wiki',
                site: 'wiki',
                status: false,
                url: 'https://wiki.ezlife.eu'
            },
            {
                name: 'Cloud',
                site: 'cloud',
                status : false,
                url: 'https://cloud.ezlife.eu'
            }
        ]
    }
};

module.exports = config;