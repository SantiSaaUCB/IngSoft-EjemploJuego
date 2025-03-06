import calcular_puntaje from "./juego.js";

describe("Juego", () => {
  it("Debe iniciar con el marcador 'Love - Love' para ambos jugadores.", () => {
    expect(juego(0, 0)).toEqual("Love - Love");
  });
  it("Si Jugador 1 hace un punto, el marcador debe ser '15 - 0'.", () => {
    expect(juego(1, 0)).toEqual("15 - 0");
  });
});