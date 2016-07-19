/**
 * String helper module
 */
module.exports = {
  
  /**
   * Normalize port
   */
  normalizePort: (val) => {
    let port = parseInt(val, 10);
    
    if(isNaN(port)) {
      // Named pipe
      return val;
    }

    if(port >= 0) {
      // Port number
      return port;
    }

    return false;
  }
};
  