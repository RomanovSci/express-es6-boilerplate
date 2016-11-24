import path from 'path';
import Alias from 'require-alias'

/**
 * Setup base module
 * @return {none} 
 */
module.exports = function() {

  /**
   * Setup aliases
   */
  global.alias = new Alias({
    root: `${path.resolve()}/`,

    aliases: {
      '@views'       : 'views',
      '@config'      : 'config',
      '@public'      : 'public',
      '@helpers'     : 'helpers',
      '@runtime'     : 'runtime',
      '@controllers' : 'controllers',
      '@middlewares' : 'middlewares'
    }
  });
}();