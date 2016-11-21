/**
 * Example main controller
 * @return {Object}
 */
 module.exports = function() {

  /**
   * Object with 
   * actions
   */
  return {
    index: function(req, res, next) {
      
      res.render('index', {
        title: 'Express ES6 Boilerplate'
      });
    }
  };
}();