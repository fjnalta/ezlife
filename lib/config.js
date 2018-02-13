const config = {
    env: {
        appBaseUrl: 'https://ezlife.eu/apps/',
        webContentDir: 'public',
        port: 3000,
    },

    runtime: {
        webServices: [
            {
                name: 'Gitlab',
                site: 'gitlab',
                status: false
            },
            {
                name: 'Confluence',
                site: 'confluence',
                status: false
            },
            {
                name: 'Nextcloud',
                site: 'cloud',
                status : false
            }
        ]
    }
};

module.exports = config;