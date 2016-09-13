const express = require('express');
const router  = express.Router();

/**
 * Main controllers module
 * @return {Object} Router instance
 */
module.exports = function() {

  router.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Express ES6 Boilerplate'
    });
  });

  /**
   * Connect other controllers here
   */
   
  return router;
};