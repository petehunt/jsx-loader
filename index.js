var reactTools = require('react-tools');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable()

  var query = loaderUtils.parseQuery(this.query);
  if (query.insertPragma) {
    source = '/** @jsx ' + query.insertPragma + ' */' + source;
  }

  return reactTools.transform(source, {
    harmony: query.harmony
  });
};
