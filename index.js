var reactTools = require('react-tools');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable();
  var query = loaderUtils.parseQuery(this.query);
  return reactTools.transform(source, query);
};
