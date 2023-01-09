/*globals describe it expect*/
const Ship = require("../src/Ship.js");

describe("Ship", () => {
  it("Can set sail", () => {
    const ship = new Ship("Dover");

    ship.setSail();

    expect(ship.startingPort).toBeFalsy();
  });

  it("has a starting port", () => {
    const ship = new Ship("Dover");

    expect(ship.startingPort).toBe("Dover");
  });

  const ship = new Ship("Dover");

  it("Constructs a new instance of a ship", () => {
    expect(new Ship()).toBeInstanceOf(Ship);
  });
});
