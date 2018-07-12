require('dotenv').config();

const debug = require('debug');

if (!process.env.DEBUG) {
  if (process.env.NODE_ENV === 'production') {
    debug.enable('log:*,error:*');
  } else {
    debug.enable('log:*,error:*,debug:*');
  }
}

const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const appMiddlewares = require('./middlewares');

const log = debug('log:server');
const debugLog = debug('debug:server');

const server = jsonServer.create();
const router = jsonServer.router(require('./db.js').initialGenerator());

const middlewares = jsonServer.defaults({
  foreignKeySuffix: '_id',
});

server.use(middlewares);
debugLog('Hooked Default Middlewares');

server.use([bodyParser.json(), ...appMiddlewares(router.db)]);
debugLog('Hooked Application Middlewares');

server.use(router);
debugLog('Hooked Router');

const PORT = process.env.RC_PORT || process.env.PORT || 3000;

debugLog('Attempting to launch API at port %d', PORT);
server.listen(PORT, () => {
  log('Server started at port %d', PORT);
});
