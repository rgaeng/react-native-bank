let babel = require('babel-core');
let process = require('process');

console.log('=== Running test');
console.log(":: BABEL_ENV - ", process.env.BABEL_ENV);
console.log(":: NODE_ENV - ", process.env.NODE_ENV);
console.log(":: ENV_FILE - ", process.env.ENV_FILE);
console.log('=== Test Results');
eval(babel.transformFileSync('.env.__test__').code);

