const Port = require("../src/Port.js");

describe("Port", () => {
  const port = new Port("Dunkirk");
  it("Has a name", () => {
    expect(port.name).toBe("Dunkirk");
  });
  it("Constructs a new instance of a port", () => {
    expect(new Port()).toBeInstanceOf(Port);
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
});
