import calcular_puntaje from "./juego.js";

describe("Juego", () => {
  it("Debe iniciar con el marcador 'Love - Love' para ambos jugadores.", () => {
    expect(calcular_puntaje(0, 0)).toEqual("Love - Love");
  });
  it("Si Jugador 1 hace 1 punto, el marcador debe ser '15 - 0'.", () => {
    expect(calcular_puntaje(1, 0)).toEqual("15 - 0");
  });
  it("Si Jugador 1 hace 2 puntos, el marcador debe ser '30 - 0'.", () => {
    expect(calcular_puntaje(2, 0)).toEqual("30 - 0");
  });
  it("Si Jugador 1 hace 3 puntos, el marcador debe ser '40 - 0'.", () => {
    expect(calcular_puntaje(2, 0)).toEqual("30 - 0");
  });
});