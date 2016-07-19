import http from 'http';
import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import robots from 'robots.txt';
import stringHelper from './helpers/stringHelper';
import createDebugInstance from 'debug';
import getListeners from './listeners';
import config from './config';

let 
  port = stringHelper.normalizePort(process.env.PORT || config.get('port')),
  debug = createDebugInstance('testing-server:server'),
  app = express(),
  server = http.createServer(app),
  listeners = getListeners(debug, server, port);

/**
 * Set port
 */
app.set('port', port);

/**
 * Http server setup
 */
server.listen(port);
server.on('error', listeners.onError);
server.on('listening', listeners.onListening);

/**
 * View engine setup
 */
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

/**
 * Setup components
 */
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(robots(__dirname + '/robots.txt'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

/**
 * Setup middlewares
 */
require('./middleware')(app);

/**
 * Setup controllers
 */
app.use(require('./controllers')());

/**
 * Setup error handlers
 */
require('./errors')(app);
