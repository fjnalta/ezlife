const config = {
    env: {
        appBaseUrl: 'https://ezlife.eu/apps/',
        webContentDir: 'public',
        port: 3000,
    },

    runtime: {
        webServices: [
            {
                name: 'gitlab',
                status: false
            },
            {
                name: 'confluence',
                status: false
            },
            {
                name: 'cloud',
                status : false
            }
        ]
    }
};

module.exports = config;