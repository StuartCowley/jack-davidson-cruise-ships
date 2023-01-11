/*globals describe it expect*/
const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");

describe("Ship", () => {
  it("can dock at a different port", () => {
    const dover = new Port("Dover");
    const ship = new Ship(dover);

    const calais = new Port("Calais");
    ship.dock(calais);

    expect(ship.currentPort).toBe(calais);
  });

  it("Can set sail", () => {
    const ship = new Ship("Dover");

    ship.setSail();

    expect(ship.startingPort).toBeFalsy();
  });

  const ship = new Ship("Dover");

  it("Constructs a new instance of a ship", () => {
    expect(new Ship()).toBeInstanceOf(Ship);
  });

  it("has a starting port", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);

    expect(ship.startingPort).toBe(port);
  });
});
