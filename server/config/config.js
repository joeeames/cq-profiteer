var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/cq-profiteer',
    rootPath: rootPath,
    port: process.env.PORT || 8111
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://jeames:multivision@ds053178.mongolab.com:53178/multivision',
    port: process.env.PORT || 80
  }
}