const Port = require("./Port");

function Ship(port) {
  this.startingPort = port;
  this.currentPort = port;
}
Ship.prototype.setSail = function () {
  this.startingPort = false;
};
Ship.prototype.dock = function (port) {
  this.currentPort = port;
};

module.exports = Ship;
