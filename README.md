# ezlife.eu

## Installation

You need `nodeJs` to run the Application.

Install required modules via `npm install --save`.

Execute `node app.js` to start the Application.

## Project Documentaion

* Project Documentation : [EZLIFE Wiki](https://wiki.ezlife.eu/display/EZLIFE/ezlife+Home)
* Tasks & Issues : [EZLIFE Jira](https://jira.ezlife.eu/browse/EZLIFE)

## Snippets

### Compile CSS
 
* sass scss/style.scss public/css/style.css

### Automatically close Jira Issues

  * use these trigger words to close Jira issues directly through git commits

```
* Resolves EZLIFE-1
* Closes EZLIFE-1
* Fixes EZLIFE-1
```

### X-Frame-Options/Content-Security-Policy for all Services

* NGINX - edit /etc/nginx/conf-available/headers.conf

```bash
add_header X-Frame-Options "Allow-From ezlife.eu";
add_header Content-Security-Policy "frame-ancestors https://ezlife.eu https://kc.ezlife.eu https://mail.ezlife.eu https://gitlab.ezlife.eu";
```

* Nextcloud - edit /var/www/nextcloud/lib/public/AppFramework/Http/ContentSecurityPolicy.php

```php
protected $allowedFrameAncestors = [
                '\'self\'',
                'https://ezlife.eu',
        ];
```

* Gitlab - edit /var/opt/gitlab/nginx/conf/gitlab-http.conf

```bash
proxy_hide_header Content-Security-Policy;
proxy_hide_header X-Frame-Options;
```

* Roundcube - edit /opt/www/roundcubemail/config/defaults.inc.php

```php
$config['x_frame_options'] = 'Allow-From https://ezlife.eu';
```

* Jira - edit /opt/atlassian/jira/bin/setenv.sh

```bash
JVM_SUPPORT_RECOMMENDED_ARGS="-Dcom.atlassian.jira.clickjacking.protection.disabled=true"
```

* Confluence - edit /opt/atlassian/confluence/bin/setenv.sh
```bash
CATALINA_OPTS="-Dconfluence.clickjacking.protection.disable=true ${CATALINA_OPTS}"
```