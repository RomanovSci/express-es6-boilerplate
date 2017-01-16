import alias   from './alias';
import winston from 'winston';
import config  from './config';

const Mail = require('winston-mail').Mail;

module.exports = new (winston.Logger)({
  
  /**
   * Users log
   * @type {Array}
   */
  transports: [

    /**
     * Output to info flie
     */    
    new (winston.transports.File)({
      level: 'info',
      name: 'info-file',
      filename: alias.path('@logs/info.log')
    }),

    /**
     * Output to error flie
     */
    new (winston.transports.File)({
      level: 'error',
      name: 'error-file',
      filename: alias.path('@logs/error.log')
    }),

    /**
     * Output to console
     */
    new (winston.transports.Console)({
      level: 'debug',
      colorize: true,
      timestamp: true,
      json: true
    }),

    /**
     * Send errors via mail
     */
    new winston.transports.Mail({
      level   : 'error',
      to      :  config.get('mail:report'),
      from    : 'bug@express-es6-boilerplate.com',
      subject : 'Ooooppss...Some bug',
      host    : 'localhost'
    })
  ],

  exitOnError: false
});
