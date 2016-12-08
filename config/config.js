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
    db: process.env.DATABASE,//'mongodb://localhost/code-development',
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
    db: process.env.DATABASE,//'mongodb://localhost/code-development',
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
    db: process.env.DATABASE,//'mongodb://localhost/code-test',
    socketIoUrl: 'http://localhost:3000',
    jwtsecret: process.env.JWTSECRET || 'supersecretsharedkey'
  },

  production: {
    root: rootPath,
    app: {
      name: 'code'
    },
    port: process.env.PORT || 3000,
    db: process.env.DATABASE,//"mongodb://heroku_13hjrbgd:4edg2qi1c1rcs6g9rlnn0711c@ds063186.mlab.com:63186/heroku_13hjrbgd",//'mongodb://localhost/code-production',
    jwtsecret: process.env.JWTSECRET || 'supersecretsharedkey'
  }
};

module.exports = config[env];

