import alias from '../components/alias';
const logger = alias.require('@components/logger');

/**
 * Main controller class
 */
class MainController {

  constructor() {

    /**
     * Controller 
     * config here
     */
    console.log('Init main controller');
  }

  /**
   * Index action
   * @param  {Object}   req   Request object
   * @param  {Object}   res   Result object
   * @param  {Function} next  Next middleware function
   * @return {none}       
   */
  index(req, res, next) {

    res.render('index', {
      'title': 'Express ES6 Boilerplate'
    });
  }
}

module.exports = new MainController();