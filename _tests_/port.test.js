const Port = require("../src/Port.js");

describe("Port", () => {
  const port = new Port("Dunkirk");
  it("Has a name", () => {
    expect(port.name).toBe("Dunkirk");
  });
  it("Constructs a new instance of a port", () => {
    expect(new Port()).toBeInstanceOf(Port);
  });
});
