var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'code'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://mongo/code-development',
    jwtsecret: process.env.JWTSECRET || 'supersecretsharedkey'
  },

  travis: {
    root: rootPath,
    app: {
      name: 'code'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/code-development',
    jwtsecret: process.env.JWTSECRET || 'supersecretsharedkey'
  },

  test: {
    root: rootPath,
    app: {
      name: 'code'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://mongo/code-test',
    jwtsecret: process.env.JWTSECRET || 'supersecretsharedkey'
  },

  production: {
    root: rootPath,
    app: {
      name: 'code'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://mongo/code-production',
    jwtsecret: process.env.JWTSECRET || 'supersecretsharedkey'
  }
};

module.exports = config[env];
