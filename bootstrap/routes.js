import alias from '../components/alias';

const ROUTES_CONFIG = alias.require('@config/routes.json');

/**
 * Setup all routes in app by routes config
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
   * @return void
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
            const METHOD = method.toLowerCase();
            
            this.routerInstance[METHOD](
                route,
                actionFunction.bind(this.controllersMap[controllerName])
            );
          });
        });
      });
    });
  }
}

module.exports = (function (ROUTES_CONFIG) {
  /**
   * Return empty
   * Router instance
   */
  if (!ROUTES_CONFIG) {
    return require('express').Router();
  }

  /**
   * Return configurated
   * Router instance
   */
  return new RouterConfigurator(ROUTES_CONFIG).routerInstance;
})(ROUTES_CONFIG);
