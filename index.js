var reactTools = require('react-tools');
var loaderUtils = require('loader-utils');

var assign = require('object-assign');

// source map support added by Ben Mosher. #Apache2ChangeNotice
var SourceMapGenerator = require('source-map').SourceMapGenerator;
var SourceMapConsumer = require('source-map').SourceMapConsumer;

module.exports = function(source, incomingMap) {
  this.cacheable && this.cacheable();

  var current = loaderUtils.getCurrentRequest(this);

  var query = loaderUtils.parseQuery(this.query);
  if (query.insertPragma) {
    source = '/** @jsx ' + query.insertPragma + ' */' + source;
  }

  var transform = reactTools.transformWithDetails(source,
    assign(query, {sourceMap: this.sourceMap}));

  var outgoingMap = transform.sourceMap;
  if (outgoingMap) {
    outgoingMap.sources = [this.resourcePath];
    outgoingMap.file = current;
    outgoingMap.sourcesContent = [source];
  }

  if (incomingMap) {
    var generator = SourceMapGenerator.fromSourceMap(new SourceMapConsumer(outgoingMap));
    generator.applySourceMap(new SourceMapConsumer(incomingMap));
    outgoingMap = JSON.parse(generator.toString());
  }

  this.callback(null, transform.code, outgoingMap);
};
