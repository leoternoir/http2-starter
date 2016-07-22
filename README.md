# HTTP/2 Starter

An Nginx & Express.js based http/2 server

## Features
- [Nginx configuration](https://github.com/leoternoir/http2-start/tree/master/nginx)
- PM2 Deployement
- Express.js starter pack
- Handlebars templating 💩
- Nginx static server
- Promises-ready routing
- Logs

## How it works
- Both dev & prod express configurations are set in `./config`
- Declare your routes in `./config/routes.js`
- Create your templates in `./views` and your partials in `./views/partials`
- Partials are automatically parsed and registered at the start of your server
- Create content in `./content`
- You can require `./content/index` to easily require or merge content files
- Any public ressource is stored in `./public`
- To deploy, use `./ecosystem.json` & run `pm2 deploy prod`

## Thanks to
[pqml](https://github.com/pqml) for his nginx configuration guide
