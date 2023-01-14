const Itinerary = require("../src/Itinerary.js");
const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");

describe("Itinerary", () => {
  it("Constructs a new instance of an itinerary", () => {
    expect(new Itinerary()).toBeInstanceOf(Itinerary);
  });
  it("can have ports", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");

    const itinerary = new Itinerary([dover, calais]);

    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
