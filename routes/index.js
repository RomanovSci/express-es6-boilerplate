/**
 * Routes config
 * @type {Object}
 */
const routesConfig = {
  '/': {
    methods:    ['GET', 'POST'],
    controller: 'main',
    action:     'index'
  }
};

/**
 * Set up routes and return 
 * Express Router object
 * @type {Object}
 */
module.exports = require('./bootstrap')(routesConfig); 
