var test = require('tap').test;
var parts = require('..').parts;

test('parts of type string', function(t) {
  t.deepEqual(parts('type'), ['type'], 'should return array including type');
  t.end();
});
test('parts of type/id string', function(t) {
  t.deepEqual(parts('type/id'), ['type', 'id'], 'should return array including type and id');
  t.end();
});
test('parts of type/id/subtype string', function(t) {
  t.deepEqual(parts('type/id/subtype'), ['type', 'id', 'subtype'], 'should return array including type, id and subtype');
  t.end();
});
test('parts of type//subtype string', function(t) {
  t.deepEqual(parts('type//subtype'), ['type', undefined, 'subtype'], 'should return array including type, undefined and subtype');
  t.end();
});

test('parts of type object', function(t) {
  t.deepEqual(parts({ type: 'type' }), ['type'], 'should return array including type');
  t.end();
});
test('parts of type/id object', function(t) {
  t.deepEqual(parts({ type: 'type', id: 'id'}), ['type', 'id'], 'should return array including type and id');
  t.end();
});
test('parts of type/id/subtype object', function(t) {
  t.deepEqual(parts({ type: 'type', id: 'id', subtype: 'subtype' }), ['type', 'id', 'subtype'], 'should return array including type, id and subtype');
  t.end();
});
test('parts of type//subtype object', function(t) {
  t.deepEqual(parts({ type: 'type', subtype: 'subtype' }), ['type', undefined, 'subtype'], 'should return array including type, undefined and subtype');
  t.end();
});
