/**
 * Listeners module
 * @param  {Object} debug  Debug instance
 * @param  {Object} server Http server instance
 * @param  {Number} port   
 * @return {none}
 */
module.exports = function(debug, server, port) {

  return {
    
    /**
     * Event listener for HTTP 
     * server "error" event.
     */
    onError: function(error) {
      
      if(error.syscall !== 'listen') {
        throw error;
      }

      let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

      /**
       * Handle specific listen 
       * errors with friendly messages
       */
      switch(error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;

        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;

        default:
          throw error;
      }
    },
    
    /**
     * Event listener for HTTP 
     * server "listening" event.
     */
    onListening: function() {
      let addr = server.address();
      let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    
      console.log('Listening on ' + bind);
    }
  };
};
