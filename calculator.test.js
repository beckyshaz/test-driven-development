 import { calculator } from "./calculator"

test("object assignment", () => {
    expect(calculator.add(1, 2)).toBe(3);

    expect(calculator.subtract(2, 1)).toBe(1);

    expect(calculator.divide(2, 1)).toBe(2);

    expect(calculator.multiply(2, 2)).toBe(4);

});

