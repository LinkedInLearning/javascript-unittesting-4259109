function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
      throw new Error("Division by zero is not allowed");
  }
  return a / b;
}


QUnit.module("Calculator", function() {
  QUnit.module("add", function() {
      QUnit.test("should add two positive numbers", function(assert) {
          assert.equal(add(1, 2), 3);
      });

      QUnit.test("should add two negative numbers", function(assert) {
          assert.equal(add(-1, -2), -3);
      });

      QUnit.test("should add a positive and a negative number", function(assert) {
          assert.equal(add(1, -2), -1);
      });

      QUnit.test("should add zero", function(assert) {
          assert.equal(add(1, 0), 1);
      });
  });

  QUnit.module("subtract", function() {
      QUnit.test("should subtract two positive numbers", function(assert) {
          assert.equal(subtract(3, 2), 1);
      });

      QUnit.test("should subtract two negative numbers", function(assert) {
          assert.equal(subtract(-3, -2), -1);
      });

      QUnit.test("should subtract a positive and a negative number", function(assert) {
          assert.equal(subtract(1, -2), 3);
      });

      QUnit.test("should subtract zero", function(assert) {
          assert.equal(subtract(1, 0), 1);
      });
  });

  QUnit.module("multiply", function() {
      QUnit.test("should multiply two positive numbers", function(assert) {
          assert.equal(multiply(2, 3), 6);
      });

      QUnit.test("should multiply two negative numbers", function(assert) {
          assert.equal(multiply(-2, -3), 6);
      });

      QUnit.test("should multiply a positive and a negative number", function(assert) {
          assert.equal(multiply(2, -3), -6);
      });

      QUnit.test("should multiply by zero", function(assert) {
          assert.equal(multiply(2, 0), 0);
      });
  });

  QUnit.module("divide", function() {
      QUnit.test("should divide two positive numbers", function(assert) {
          assert.equal(divide(6, 3), 2);
      });

      QUnit.test("should divide two negative numbers", function(assert) {
          assert.equal(divide(-6, -3), 2);
      });

      QUnit.test("should divide a positive and a negative number", function(assert) {
          assert.equal(divide(6, -3), -2);
      });

      QUnit.test("should divide by one", function(assert) {
          assert.equal(divide(6, 1), 6);
      });

      QUnit.test("should throw an error when dividing by zero", function(assert) {
          assert.throws(function() { divide(6, 0); }, new Error("Division by zero is not allowed"));
      });
  });
});