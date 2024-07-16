// test.js

const assert = require('./assert');

try {
    assert.assertEqual(5, 35, "5 should be equal to 5");
    console.log("Test passed!");
} catch (e) {
    console.error(e.message);
}

try {
    assert.assertGreaterThan(10, 5, "10 should be greater than 5");
    console.log("Test passed!");
} catch (e) {
    console.error(e.message);
}

// Weitere Tests können hier hinzugefügt werden
