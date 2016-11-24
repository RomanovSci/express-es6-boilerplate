import fs from 'fs';
import path from 'path';
import nconf from 'nconf';
 
nconf.argv()
  .env()
  .file({
    file: path.resolve(global['@config'], 'main.json')
  });

module.exports = nconf;