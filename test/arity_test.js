var test = require('tap').test;
var arity = require('..').arity;

test('arity of type string', function(t) {
  t.equal(arity('type'), 1, 'should return 1');
  t.end();
});
test('arity of type/id string', function(t) {
  t.equal(arity('type/id'), 2, 'should return 2');
  t.end();
});
test('arity of type/id/subtype string', function(t) {
  t.equal(arity('type/id/subtype'), 3, 'should return 3');
  t.end();
});
test('arity of type//subtype string', function(t) {
  t.equal(arity('type//subtype'), 3, 'should return 3');
  t.end();
});

test('arity of type object', function(t) {
  t.equal(arity({ type: 'type' }), 1, 'should return 1');
  t.end();
});
test('arity of type/id object', function(t) {
  t.equal(arity({ type: 'type', id: 'id'}), 2, 'should return 2');
  t.end();
});
test('arity of type/id/subtype object', function(t) {
  t.equal(arity({ type: 'type', id: 'id', subtype: 'subtype' }), 3, 'should return 3');
  t.end();
});
test('arity of type//subtype object', function(t) {
  t.equal(arity({ type: 'type', subtype: 'subtype' }), 3, 'should return 3');
  t.end();
});
