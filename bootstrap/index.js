import path from 'path';

/**
 * Setup base module
 * @return {none} 
 */
module.exports = function() {

  /**
   * Aliases
   * @type {String}
   */
  global['@app']         = path.resolve();
  global['@views']       = path.resolve('./views');
  global['@config']      = path.resolve('./config');
  global['@public']		 = path.resolve('./public');
  global['@controllers'] = path.resolve('./controllers');
  global['@middlewares'] = path.resolve('./middlewares');
}();