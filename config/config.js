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
    db: 'mongo',/*process.env.DATABASE,'mongodb://localhost/code-production',*/
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
    db: /*process.env.DATABASE,*/'mongodb://localhost/code-production',
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
    db: /*process.env.DATABASE,*/'mongodb://localhost/code-production',
    socketIoUrl: 'http://localhost:3000',
    jwtsecret: process.env.JWTSECRET || 'supersecretsharedkey'
  },

  production: {
    root: rootPath,
    app: {
      name: 'code'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGODB_URI,
    jwtsecret: process.env.JWTSECRET || 'supersecretsharedkey'
  }
};

module.exports = config[env];

