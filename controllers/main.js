/**
 * Example main 
 * controller
 * 
 * @param  {Object}   req  Request  object
 * @param  {Object}   res  Response object
 * @param  {Function} next Next middleware
 * 
 * @return {none}
 */
module.exports = function(req, res, next) {
  res.render('index', {
    title: 'Express ES6 Boilerplate'
  });
};