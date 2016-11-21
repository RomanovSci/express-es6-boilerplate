const express = require('express');
const Router  = express.Router();

/**
 * Path to controllers
 * @type {String}
 */
const controllersPath = '../controllers/';

/**
 * Set up routes
 * @param  {Object} routeConfig 
 * @return {Object} Express Router object
 */
module.exports = function(routesConfig) {
  
  /**
   * Bind routes 
   * to router object
   */
  Object.keys(routesConfig).map(function(route, index) {
    routesConfig[route].methods.forEach(function(method) {

      /**
       * Converted method
       * @type {String}
       */
      let _m = method.toLowerCase();
      
      /**
       * Bind method, route,
       * controller and action
       * to Express Router object
       */
      Router[_m](
        route, 
        require(`${controllersPath}${routesConfig[route].controller}`)[routesConfig[route].action]
      );
    })
  });

  return Router;
};