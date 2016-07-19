let
  express = require('express'),
  router = express.Router();

/**
 * Main controllers module
 * @return {Object} Router instance
 */
module.exports = () => {

  router.get('/', (req, res, next) => {
    res.render('index', {
      title: 'Express ES6 Boilerplate'
    });
  });

  /**
   * Connect other controllers here
   */

  return router;
};