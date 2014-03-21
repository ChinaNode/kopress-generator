'use strict';

/*
* dependencies
*/
var koa = require('koa');
var router = require('koa-router');
var serve = require('koa-static');
var logger = require('koa-logger');
var compress = require('koa-compress');
var send = require('koa-send');
var favicon = require('koa-favi');
var kejs = require('koa-ejs');
var qs = require('koa-qs');
var path = require('path');
var render = require('koa-ejs');
var bodyParser = require('koa-bodyparser');
var koa_response_time = require('koa-response-time');
var errorhandler = require('koa-error');
var csrf = require('koa-csrf');
var session = require('koa-session');
var jsonp = require('koa-jsonp');

/*
* kopress app generator
*/
function kopress () {
  var app = koa();

  app.use(koa_response_time());
  app.keys = ['Your application message'];
  app.use(session());
  app.use(logger());
  app.use(errorhandler());
  app.use(jsonp());
  app.use(serve(__dirname));
  app.use(favicon());

  qs(app);
  app.use(bodyParser({limit: '512kb'}));
  app.use(router(app));
  render(app, {
    root: path.join(__dirname, 'view'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: true
  });

  app.use(compress({
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
  }));

  return app;
}

/*
* exports
*/
module.exports = kopress;