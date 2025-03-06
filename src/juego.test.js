import juego from "./juego.js";

describe("Juego", () => {
  it("Debe iniciar con el marcador 'love - love' para ambos jugadores.", () => {
    expect(juego(0, 0)).toEqual("Love-Love");
  });
});