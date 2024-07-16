// assert.js

function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        throw new Error(message || `Assertion failed: ${actual} !== ${expected}`);
    }
}

function assertNotEqual(actual, expected, message) {
    if (actual === expected) {
        throw new Error(message || `Assertion failed: ${actual} === ${expected}`);
    }
}

function assertLessThan(actual, expected, message) {
    if (actual >= expected) {
        throw new Error(message || `Assertion failed: ${actual} >= ${expected}`);
    }
}

function assertGreaterThan(actual, expected, message) {
    if (actual <= expected) {
        throw new Error(message || `Assertion failed: ${actual} <= ${expected}`);
    }
}

function assertLessThanOrEqual(actual, expected, message) {
    if (actual > expected) {
        throw new Error(message || `Assertion failed: ${actual} > ${expected}`);
    }
}

function assertGreaterThanOrEqual(actual, expected, message) {
    if (actual < expected) {
        throw new Error(message || `Assertion failed: ${actual} < ${expected}`);
    }
}

function assertTrue(value, message) {
    if (!value) {
        throw new Error(message || `Assertion failed: ${value} is not true`);
    }
}

function assertFalse(value, message) {
    if (value) {
        throw new Error(message || `Assertion failed: ${value} is not false`);
    }
}

// Export the functions
module.exports = {
    assertEqual,
    assertNotEqual,
    assertLessThan,
    assertGreaterThan,
    assertLessThanOrEqual,
    assertGreaterThanOrEqual,
    assertTrue,
    assertFalse
};
