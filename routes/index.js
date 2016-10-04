const express = require('express');
const router  = express.Router();

/**
 * Main routes module
 * @return {Object} Router instance
 */
module.exports = function() {

  router.get('/', require('../controllers/main'));

  /**
   * Connect other controllers here
   */
  return router;
};