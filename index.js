var React = require('react-tools');

module.exports = function(source) {
  this.cacheable();
  return React.transform(source);
};