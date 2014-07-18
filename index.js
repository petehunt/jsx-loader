var reactTools = require('react-tools');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  var options = {};

  // copy options to own object
  if(this.options.jsx) {
    for(var name in this.options.jsx) {
      options[name] = this.options.jsx[name];
    }
  }

  // copy query into options
  var query = loaderUtils.parseQuery(this.query);
  for(var name in query) {
    options[name] = query[name];
  }

  if (options.insertPragma) {
    source = '/** @jsx ' + options.insertPragma + ' */' + source;
  }

  return reactTools.transform(source, options);
};
