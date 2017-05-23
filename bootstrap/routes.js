import alias from '../components/alias';
const _rConf = alias.require('@config/routes.json');

/**
 * Configurating all routes
 * in app by routes config
 * 
 * @param {Object} routesConfig
 */
class RouterConfigurator {

  constructor(routesConfig) {

    this.routesConfig = routesConfig;

    this.routerInstance = require('express').Router();

    this.controllersMap = {};

    this.init();
  }

  /**
   * Initialization
   * @return {none}
   */
  init() {

    /**
     * Booting all controllers
     * and bind action to Express
     * Router Object
     */
    Object.keys(this.routesConfig).map((controllerName) => {
      
      /**
       * Save controller 
       * instance
       */
      this.controllersMap[controllerName] = alias.require(`@controllers/${controllerName}`);

      /**
       * Bind current controller 
       * actions to Router instance
       */
      Object.keys(this.routesConfig[controllerName]).map((action) => {
        let actionFunction = this.controllersMap[controllerName][action];

        if (typeof actionFunction !== 'function') {
          throw new Error(`Action ${action} in ${controllerName} does not exist`);
        }

        /**
         * Bind routes to 
         * Router instance
         */
        Object.keys(this.routesConfig[controllerName][action]).map((route) => {
          let methods = this.routesConfig[controllerName][action][route];

          if (!(methods instanceof Array)) {
            throw new Error(`Methods in routesConfig for ${controllerName}.${action}.${route} must be Array`);
          }

          methods.forEach((method) => {
            let _m = method.toLowerCase();
            
            this.routerInstance[_m](
                route,
                actionFunction.bind(this.controllersMap[controllerName])
            );
          });
        });
      });
    });
  }
}

module.exports = (function(rcnf) {

  /**
   * Return empty 
   * Router instance
   */
  if (!rcnf) {
    return require('express').Router();
  }

  /**
   * Return configurated
   * Router instance
   */
  return new RouterConfigurator(rcnf).routerInstance;
})(_rConf);