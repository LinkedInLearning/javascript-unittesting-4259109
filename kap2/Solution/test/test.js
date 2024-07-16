
const { isValidEmail } = require('../challenge');
const assert = require('assert');


describe('Validierungsfunktionen', function() {
  describe('isValidEmail', function() {
    it('sollte eine gültige E-Mail-Adresse erkennen', function() {
      assert.strictEqual(isValidEmail('test@example.com'), true);
    });

    it('sollte eine ungültige E-Mail-Adresse erkennen (kein @)', function() {
      assert.strictEqual(isValidEmail('testexample.com'), false);
    });

    it('sollte eine ungültige E-Mail-Adresse erkennen (kein Domain-Teil)', function() {
      assert.strictEqual(isValidEmail('test@'), false);
    });

    it('sollte eine ungültige E-Mail-Adresse erkennen (kein Benutzername)', function() {
      assert.strictEqual(isValidEmail('@example.com'), false);
    });

    it('sollte eine ungültige E-Mail-Adresse erkennen (keine Top-Level-Domain)', function() {
      assert.strictEqual(isValidEmail('test@example'), false);
    });

    it('sollte eine ungültige E-Mail-Adresse erkennen (Leerzeichen)', function() {
      assert.strictEqual(isValidEmail('test @example.com'), false);
    });
  });
});

