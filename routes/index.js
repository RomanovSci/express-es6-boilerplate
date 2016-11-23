/**
 * Set up routes and return 
 * Express Router object
 * @type {Object}
 */
module.exports = require('./bootstrap')(
  
  /**
   * Routes config
   * object
   */
  require('../config/routes.json')
); 