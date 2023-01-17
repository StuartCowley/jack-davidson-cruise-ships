/*globals describe it expect*/
const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship", () => {
  let ship;
  let dover;
  let calais;
  let itinerary;

  beforeEach(() => {
    dover = new Port("Dover");
    calais = new Port("Calais");
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
  });

  it("gets added to port on instantiation", () => {
    expect(dover.ships).toContain(ship);
  });
  it("can remove a ship", () => {
    const port = new Port("Dover");
    const titanic = jest.fn();
    const queenMary = jest.fn();

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
  it("can add a ship", () => {
    const port = new Port("Dover");
    const ship = jest.fn();

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });

  it("can't sail further than its itinerary", () => {
    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of itinerary reached");
  });
  it("can dock at a different port", () => {
    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });

  it("can set sail", () => {
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(dover.ships).not.toContain(ship);
  });

  it("Constructs a new instance of a ship", () => {
    const port = new Port("Dover");

    expect(ship).toBeInstanceOf(Ship);
  });

  it("has a starting port", () => {
    expect(ship.currentPort).toBe(dover);
  });
});
