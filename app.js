import alias        from './components/alias';
import config       from './components/config';
import Listeners    from './helpers/listeners';

import http         from 'http';
import express      from 'express';
import path         from 'path';
import favicon      from 'serve-favicon';
import cookieParser from 'cookie-parser';
import bodyParser   from 'body-parser';
import robots       from 'robots.txt';

let app = express();
let port = process.env.PORT || config.get('port');
let server = http.createServer(app);
let listeners = new Listeners(server, port);

/**
 * Set port
 */
app.set('port', port);

/**
 * Setup http server
 */
server.listen(port);
server.on('error', listeners.onError.bind(listeners));
server.on('listening', listeners.onListening.bind(listeners));

/**
 * Setup view engine
 */
app.engine('ejs', require('ejs-locals'));
app.set('views', alias.path('@views'));
app.set('view engine', 'ejs');

/**
 * Setup components
 */
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: false 
}));

app.use(express.static(alias.path('@public')));
app.use(robots(alias.path('@app/robots.txt')));
app.use(favicon(alias.path('@public/favicon.ico')));

/**
 * Setup middlewares
 */
alias.require('@middlewares')(app);

/**
 * Setup routes
 */
app.use(alias.require('@components/routes'));

/**
 * Setup error handlers
 */
alias.require('@errors')(app);

if (app.get('env') === 'test') {
  process.exit(0);
}