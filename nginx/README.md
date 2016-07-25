# Nginx configuration

Some nginx configuration file and folder structure examples. Use nginx caching as it is better than nodeJS caching.

## Enabling/Disabling a site

To enable a site, simply symlink your configuration file from `sites-available` to `sites-enabled` then reload your nginx config.

```
$ ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled
$ /etc/init.d/nginx reload
```

## Generating ssl keys

Use the ssl configuration you prefer. Personally, I think [Let's Encrypt](https://letsencrypt.org/) is the shit.

Too generate your `dhparam.pem` run :

```
$ openssl dhparam -out /etc/nginx/ssl/dhparam.pem 2048
```

## Careful

This is a spoof nginx folder. Do not clone this folder into your `/etc` folder you dummy ! I strongly recommend manually editing each sites configuration file.

## Documentation
Some guides :
- [Reverse proxy guide](http://lietu.net/2013/03/nginx-reverse-proxy-cache-for-multiple-sites.html)
- [Digital Ocean's optimisation guide](https://www.digitalocean.com/community/tutorials/how-to-optimize-nginx-configuration)
- [NodeBB's example configurations](https://nodebb.readthedocs.io/en/latest/configuring/proxies/nginx.html)
- __PROBABLY OUTDATED__ [Let's Encrypt easy configuration](https://blog.barthe.ph/2015/12/09/lets-encrypt-with-nginx/)
- [Nginx caching guide](https://www.nginx.com/blog/nginx-caching-guide/)

Best practices :
- [Nginx & Node.js good practices](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load/)
- [Avoid downtime during deployement](http://blog.argteam.com/coding/hardening-node-js-for-production-part-3-zero-downtime-deployments-with-nginx/)