export default class Listeners {

  constructor(server, port) {
    
    this.server = server;

    this.port = port;

    this.init();
  }

  /**
   * Initialization
   * @return {none}
   */
  init() {

    if (!this.server || !this.port) {

      console.error('Listeners class requireвd server and port params');
      return;
    }
  }

  /**
   * On error callback
   * @param  {Object} error
   * @return {none}
   */
  onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    let bind = (typeof this.port === 'string')
      ? 'Pipe ' + this.port
      : 'Port ' + this.port;

    /**
     * Handle specific listen 
     * errors with friendly messages
     */
    switch (error.code) {
      case 'EACCES':
      {
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      }
      case 'EADDRINUSE':
      {
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      }
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP 
   * server "listening" event.
   */
  onListening() {
    let addr = this.server.address();
    let bind = (typeof addr === 'string')
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  
    console.log('Listening on ' + bind);
  }
};
