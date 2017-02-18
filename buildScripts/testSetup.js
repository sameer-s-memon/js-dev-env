// This file isn't transpiled, so must use commonJS and ES5.

// Register Babel to transpile before our tests run.

require('babel-register')();

// disable webpack features that Mocha doesn't understand.

require.extensions['.css'] = function() {};
