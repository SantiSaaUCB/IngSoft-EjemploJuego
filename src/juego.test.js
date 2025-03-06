import juego from "./juego.js";

describe("Juego", () => {
  it("Debe iniciar con el marcador 'love - love' para ambos jugadores.", () => {
    expect(juego()).toEqual();
  });
  it("Si un jugador gana un punto desde 'love', su puntuación debe ser '15'", () => {
    expect(juego()).toEqual();
  });
  it("Si un jugador gana un punto desde '15', su puntuación debe ser '30'", () => {
    expect(juego()).toEqual();
  });
  it("Si un jugador gana un punto desde '30', su puntuación debe ser '40'", () => {
    expect(juego()).toEqual();
  });
  it("Si un jugador tiene '40' y gana un punto, debe ganar el juego (si no hay deuce)", () => {
    expect(juego()).toEqual();
  });
  it("Si ambos jugadores tienen el mismo puntaje, el marcador debe ser deuce", () => {
    expect(juego()).toEqual();
  });
  it("Si un jugador tiene ventaja y gana el punto, gana el juego", () => {
    expect(juego()).toEqual();
  });
  it("Si un jugador tiene ventaja y el otro gana el punto, vuelven a deuce", () => {
    expect(juego()).toEqual();
  });
  it("Si un jugador gana el juego, debe anunciarse correctamente", () => {
    expect(juego()).toEqual();
  });
  it("Después de que un jugador gana, el marcador debe reiniciarse para un nuevo juego", () => {
    expect(juego()).toEqual();
  });
});


