var derby = require('derby');

function Component () {}

Component.prototype.init = function () {
  this.model.set('path.isProduction', derby.util.isProduction);
  this.model.set('path.isServer', derby.util.isServer);
};

Component.prototype.destroy = function () {
  this.model.del('path');
};

module.exports = Component;
