const { add, subtract, multiply, divide } = require('./rechne');


describe('Calculator', () => {
  describe('add', () => {
      test('should add two positive numbers', () => {
          expect(add(1, 2)).toBe(3);
      });

      test('should add two negative numbers', () => {
          expect(add(-1, -2)).toBe(-3);
      });

      test('should add a positive and a negative number', () => {
          expect(add(1, -2)).toBe(-1);
      });

      test('should add zero', () => {
          expect(add(1, 0)).toBe(1);
      });
  });

  describe('subtract', () => {
      test('should subtract two positive numbers', () => {
          expect(subtract(3, 2)).toBe(1);
      });

      test('should subtract two negative numbers', () => {
          expect(subtract(-3, -2)).toBe(-1);
      });

      test('should subtract a positive and a negative number', () => {
          expect(subtract(1, -2)).toBe(3);
      });

      test('should subtract zero', () => {
          expect(subtract(1, 0)).toBe(1);
      });
  });

  describe('multiply', () => {
      test('should multiply two positive numbers', () => {
          expect(multiply(2, 3)).toBe(6);
      });

      test('should multiply two negative numbers', () => {
          expect(multiply(-2, -3)).toBe(6);
      });

      test('should multiply a positive and a negative number', () => {
          expect(multiply(2, -3)).toBe(-6);
      });

      test('should multiply by zero', () => {
          expect(multiply(2, 0)).toBe(0);
      });
  });

  describe('divide', () => {
      test('should divide two positive numbers', () => {
          expect(divide(6, 3)).toBe(2);
      });

      test('should divide two negative numbers', () => {
          expect(divide(-6, -3)).toBe(2);
      });

      test('should divide a positive and a negative number', () => {
          expect(divide(6, -3)).toBe(-2);
      });

      test('should divide by one', () => {
          expect(divide(6, 1)).toBe(6);
      });

      test('should throw an error when dividing by zero', () => {
          expect(() => divide(6, 0)).toThrow('Division by zero is not allowed');
      });
  });
});