import alias from '../components/alias';
const log = alias.require('@components/logger');

module.exports = class ErrorHandler {

  constructor(app) {

    this.app = app;

    this.init();
  }

  /**
   * Error handlers
   * initialization
   */
  init() {

    let handlers = [
      'notFoundException',
      'renderErrorPage'
    ];

    /**
     * Register handlers
     * in application
     */
    handlers.forEach((handler) => {

      this.app.use(this[handler].bind(this));
    });
  }

  /**
   * Not found error handler
   * @param object req
   * @param object res
   * @param function next
   * @return undefined
   */
  notFoundException(req, res, next) {
    let err = new Error('Not Found');
    
    err.status = 404;
    next(err);
  }

  /**
   * Render error page
   * @param object err
   * @param object req
   * @param object res
   * @param function next
   * @return undefined
   */
  renderErrorPage(err, req, res, next) {

    let errorTplProps = {
      title: 'Error',
      message: err.message,
      error: err
    };

    if (this.app.get('env') === 'production') {

      errorTplProps.error = {
        status: err.status,
        stack: ''
      };
    }

    /**
     * Send error
     * via email
     */
    log.error(JSON.stringify({
      message : err.message,
      error   : {
        status: err.status,
        stack : err.stack
      }
    }));

    res.status(err.status || 500);
    res.render('error', errorTplProps);
  }
};