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
		apiUrl: 'http://localhost:3000',
    socketIoUrl: 'http://localhost:3000',
    jwtsecret: process.env.JWTSECRET || 'supersecretsharedkey'
  },

  travis: {
    root: rootPath,
    app: {
      name: 'code'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/code-development',
		apiUrl: 'http://localhost:3000',
    socketIoUrl: 'http://localhost:3000',
    jwtsecret: process.env.JWTSECRET || 'supersecretsharedkey'
  },

  test: {
    root: rootPath,
    app: {
      name: 'code'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://mongo/code-test',
    socketIoUrl: 'http://localhost:3000',
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
