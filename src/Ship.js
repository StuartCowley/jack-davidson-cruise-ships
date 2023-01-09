function Ship(name) {
  this.name = name;
  this.startingPort = "Dover";
}

Ship.prototype.setSail = function () {
  this.startingPort = false;
};

module.exports = Ship;
