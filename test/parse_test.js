var test = require('tap').test;
var parse = require('..').parse;

test('missing argument', function(t) {
  t.deepEqual(parse(), {}, 'should return empty object');
  t.end();
});

test('empty string', function(t) {
  t.deepEqual(parse(''), {}, 'should return empty object');
  t.end();
});

test('type', function(t) {
  t.deepEqual(parse('mytype'), { type: 'mytype' }, 'should return object with type');
  t.end();
});

test('type/id', function(t) {
  t.deepEqual(parse('mytype/myid'), {
    type: 'mytype',
    id: 'myid'
  }, 'should return object with type and id');
  t.end();
});

test('type/id/subtype', function(t) {
  t.deepEqual(parse('mytype/myid/mysubtype'), {
    type: 'mytype',
    id: 'myid',
    subtype: 'mysubtype'
  }, 'should return object with type, id and subtype');
  t.end();
});

test('type/id/subtype/version', function(t) {
  t.deepEqual(parse('mytype/myid/mysubtype/myversion'), {
    type: 'mytype',
    id: 'myid',
    subtype: 'mysubtype',
    version: 'myversion'
  }, 'should return object with type, id, subtype and version');
  t.end();
});

test('type/id/subtype/version/index', function(t) {
  t.deepEqual(parse('mytype/myid/mysubtype/myversion/myindex'), {
    type: 'mytype',
    id: 'myid',
    subtype: 'mysubtype',
    version: 'myversion',
    index: 'myindex'
  }, 'should return object with type, id, subtype, version and index');
  t.end();
});
