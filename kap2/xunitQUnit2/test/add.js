const add = require('../add.js');

QUnit.module('add');

QUnit.test('Addiere zwei Zahlen', (assert) => {
 
  for(var i=0; i < 5; i++){
     assert.equal(add(1, i), 3);
    }
});
