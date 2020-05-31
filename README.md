<h1>ezlife.eu</h1>

<h2>Installation</h2>

You need `nodeJs` to run the Application. 

Execute `node app.js` to start the Application.

<h2>Todo</h2>

*
*
*
*
*
*

<h3>Snippets</h3>
* Compile CSS: sass scss/style.scss public/css/style.css

<h3>X-Frame-Options/Content-Security-Policy for all Services</h3>
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

