import alias   from './alias';
import winston from 'winston';

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
    new (winston.transports.Console)()
  ]
});
