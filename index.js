var reactTools = require('react-tools');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  var query = loaderUtils.parseQuery(this.query);
  if (query.insertPragma) {
    source = '/** @jsx ' + query.insertPragma + ' */\n' + source;
  }

  var result = reactTools.transformWithDetails(source, {
    harmony: query.harmony,
    sourceMap: query.sourceMap
  });

  if (result.sourceMap) {
    result.sourceMap.sources = [this.resourcePath];
    result.sourceMap.sourcesContent = [source];
  }

  var code = result.code;
  var map = result.sourceMap ? JSON.stringify(result.sourceMap) : void 0;

  this.callback(null, code, map);
};