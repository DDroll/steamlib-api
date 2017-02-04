const path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'steamlib-api'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/steamlib-api-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'steamlib-api'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/steamlib-api-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'steamlib-api'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/steamlib-api-production'
  }
};

module.exports = config[env];
