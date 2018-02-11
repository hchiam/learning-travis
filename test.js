const test = require('tape').test;
const hi = require('./code.js');

test('The hi method', function(t){
  t.equal(hi("Howard"), "Hi Howard", 'should say hi correctly');
  t.end();
});
