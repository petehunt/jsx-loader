var reactTools = require('react-tools');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  var sourceFilename = loaderUtils.getRemainingRequest(this);
  var current = loaderUtils.getCurrentRequest(this);
  var transformOptions = loaderUtils.parseQuery(this.query);

  transformOptions.sourceMap = this.sourceMap;
  var transform = reactTools.transformWithDetails(source, transformOptions);
  if (transform.sourceMap) {
    transform.sourceMap.sources = [sourceFilename];
    transform.sourceMap.file = current;
    transform.sourceMap.sourcesContent = [source];
  }
  this.callback(null, transform.code, transform.sourceMap);
};
