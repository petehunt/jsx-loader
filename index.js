var React = require('react-tools');

module.exports = function(source) {
  this.cacheable();
  var options = {};
  if (/^(\?|&)harmony=true($|&)/.exec(this.query)) {
    options.harmony = true;
  }
  return React.transform(source, options);
};
