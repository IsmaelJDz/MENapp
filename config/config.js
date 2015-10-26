var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'appmne'
    },
    port: 3000,
    db: 'mongodb://localhost/miDBtest'
  },

  test: {
    root: rootPath,
    app: {
      name: 'appmne'
    },
    port: 3000,
    db: 'mongodb://localhost/miDBtest_t'
  },

  production: {
    root: rootPath,
    app: {
      name: 'appmne'
    },
    port: 3000,
    db: 'mongodb://localhost/appmne-production'
  }
};

module.exports = config[env];
