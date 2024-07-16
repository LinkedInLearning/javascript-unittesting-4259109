const assert = require('assert');
const { add, subtract, multiply, divide } = require('../rechne');

describe('Calculator', function() {
  describe('add', function() {
      it('should add two positive numbers', function() {
          assert.strictEqual(add(1, 2), 3);
      });

      it('should add two negative numbers', function() {
          assert.strictEqual(add(-1, -2), -3);
      });

      it('should add a positive and a negative number', function() {
          assert.strictEqual(add(1, -2), -1);
      });

      it('should add zero', function() {
          assert.strictEqual(add(1, 0), 1);
      });
  });

  describe('subtract', function() {
      it('should subtract two positive numbers', function() {
          assert.strictEqual(subtract(3, 2), 1);
      });

      it('should subtract two negative numbers', function() {
          assert.strictEqual(subtract(-3, -2), -1);
      });

      it('should subtract a positive and a negative number', function() {
          assert.strictEqual(subtract(1, -2), 3);
      });

      it('should subtract zero', function() {
          assert.strictEqual(subtract(1, 0), 1);
      });
  });

  describe('multiply', function() {
      it('should multiply two positive numbers', function() {
          assert.strictEqual(multiply(2, 3), 6);
      });

      it('should multiply two negative numbers', function() {
          assert.strictEqual(multiply(-2, -3), 6);
      });

      it('should multiply a positive and a negative number', function() {
          assert.strictEqual(multiply(2, -3), -6);
      });

      it('should multiply by zero', function() {
          assert.strictEqual(multiply(2, 0), 0);
      });
  });

  describe('divide', function() {
      it('should divide two positive numbers', function() {
          assert.strictEqual(divide(6, 3), 2);
      });

      it('should divide two negative numbers', function() {
          assert.strictEqual(divide(-6, -3), 2);
      });

      it('should divide a positive and a negative number', function() {
          assert.strictEqual(divide(6, -3), -2);
      });

      it('should divide by one', function() {
          assert.strictEqual(divide(6, 1), 6);
      });

      it('should throw an error when dividing by zero', function() {
          assert.throws(() => divide(6, 0), /Division by zero is not allowed/);
      });
  });
});