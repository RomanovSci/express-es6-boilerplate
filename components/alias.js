import path from 'path';
import Alias from 'require-alias';

/**
 * Setup aliases
 */
module.exports = new Alias({
  root: `${path.resolve()}`,

  aliases: {
    '@app'         : '',
    '@logs'        : '/runtime/logs',
    '@views'       : '/views',
    '@config'      : '/config',
    '@public'      : '/public',
    '@errors'      : '/errors',
    '@helpers'     : '/helpers',
    '@runtime'     : '/runtime',
    '@components'  : '/components',
    '@controllers' : '/controllers',
    '@middlewares' : '/middlewares'
  }
});