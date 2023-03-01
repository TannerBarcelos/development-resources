const math = require('../math.js');

describe('Math tests for each arithmetic function', () => {
  test('Adds 2 + 2 to be equal to 4', () => {
    // toEqual and toBe methods are different in evaluation - but both do the same for numbers
    expect(math.addTwoNumbers(2, 2)).toBe(4);
    expect(math.addTwoNumbers(2, 2)).toEqual(4);
  });

  test('Subtracts 5 - 2 to be equal to 3', () => {
    expect(math.subTwoNumbers(5, 2)).toBe(3);
  });

  test('Multiplies 2 * 2 to be equal to 4', () => {
    expect(math.mulTwoNumbers(2, 2)).toBe(4);
  });

  test('Divides 4 / 2 to be equal to 2', () => {
    expect(math.divTwoNumbers(4, 2)).toBe(2);
  });

  test('Mods 2 % 2 to be equal to 0', () => {
    expect(math.modTwoNumbers(2, 2)).toBe(0);
  });

  test('Checks 5 > 3', () => {
    expect(math.getGreaterOfTwo(5, 3)).toBeTruthy();
  });

  test('Checks 5 >= 5', () => {
    expect(math.getGreaterOfTwo(5, 5)).toBe(-1);
  });
});
