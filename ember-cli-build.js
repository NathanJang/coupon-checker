/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  const toAssets = { destDir: 'assets' };
  const toFonts = { destDir: 'fonts' };

  // app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth.js');
  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css.map', toAssets);
  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap-theme.css');
  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap-theme.css.map', toAssets);
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', toFonts);
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', toFonts);
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', toFonts);
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', toFonts);
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', toFonts);
  app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
  app.import(app.bowerDirectory + '/sjcl/sjcl.js');

  return app.toTree();
};
