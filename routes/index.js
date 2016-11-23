/**
 * Routes config
 * @type {Object}
 */
 const routesConfig = {
  'MainController': {
    'index': {
      '/' : ['GET', 'POST']
    }
  }
};

/**
 * Set up routest and return 
 * Express Router object
 * @type {Object}
 */
 module.exports = require('./bootstrap')(routesConfig); 