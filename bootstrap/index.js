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
    root: `${path.resolve()}`,

    aliases: {
      '@app'         : '',
      '@views'       : '/views',
      '@config'      : '/config',
      '@public'      : '/public',
      '@errors'      : '/errors',
      '@helpers'     : '/helpers',
      '@runtime'     : '/runtime',
      '@bootstrap'   : '/bootstrap',
      '@controllers' : '/controllers',
      '@middlewares' : '/middlewares'
    }
  });
}();