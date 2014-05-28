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

test('type/id/subtype/index', function(t) {
  t.deepEqual(parse('mytype/myid/mysubtype/myindex'), {
    type: 'mytype',
    id: 'myid',
    subtype: 'mysubtype',
    index: 'myindex'
  }, 'should return object with type, id, subtype and index');
  t.end();
});

test('type/id/subtype/index/version', function(t) {
  t.deepEqual(parse('mytype/myid/mysubtype/myindex/myversion'), {
    type: 'mytype',
    id: 'myid',
    subtype: 'mysubtype',
    index: 'myindex',
    version: 'myversion'
  }, 'should return object with type, id, subtype, index and version');
  t.end();
});
