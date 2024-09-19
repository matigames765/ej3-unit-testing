/*Franco sabe que es importante mantenerse hidratado, toma 0,5 litros de agua por hora de pedaleo. Dado el tiempo que 
Franco 
está pedaleando, calcular la cantidad de agua, en litros, que Franco va a tomar.

Redondea el valor al número mas bajo.
Ejemplos:
Tiempo = 3 --> litros = 1
Tiempo = 6.7 --> litros = 3
Tiempo = 11.8 --> litros = 5*/

function bycicle(hoursRide) {
  return Math.floor(hoursRide * 0.5);
}

describe("Testing diferent hours and see the liters retourned", () => {
  test("3 hours", () => {
    expect(bycicle(3)).toBe(1);
  });

  test("6,7 hours", () => {
    expect(bycicle(6.7)).toBe(3);
  });

  test("11,8 hours", () => {
    expect(bycicle(11.8)).toBe(5);
  });

  test("15,5 hours", () => {
    expect(bycicle(15.5)).toBe(7);
  });

  test("20,3 hours", () => {
    expect(bycicle(20.3)).toBe(10);
  });
});
