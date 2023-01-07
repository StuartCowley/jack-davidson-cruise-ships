/*globals describe it expect*/
const Ship = require("../src/Ship.js");

describe("Ship", () => {
  const ship = new Ship("Dover");

  it("Constructs a new instance of a ship", () => {
    expect(new Ship()).toBeInstanceOf(Ship);
  });
});
