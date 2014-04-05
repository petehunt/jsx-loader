var React = require('react-tools');

module.exports = function(source) {
  var options = this.options['jsx-loader'] || {};
  this.cacheable();
  return React.transform(source, options);
};
