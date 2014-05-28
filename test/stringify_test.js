var test = require('tap').test;
var stringify = require('..').stringify;

test('missing argument', function(t) {
  t.deepEqual(stringify(), '', 'should return empty string');
  t.end();
});

test('empty object', function(t) {
  t.deepEqual(stringify({}), '', 'should return empty string');
  t.end();
});

test('type', function(t) {
  t.deepEqual(stringify({ type: 'mytype' }), 'mytype', 'should return string with type');
  t.end();
});


test('/id', function(t) {
  t.deepEqual(stringify({
    id: 'myid'
  }), '/myid', 'should return string with type and id');
  t.end();
});

test('type/id', function(t) {
  t.deepEqual(stringify({
    type: 'mytype',
    id: 'myid'
  }), 'mytype/myid', 'should return string with type and id');
  t.end();
});


test('//subtype', function(t) {
  t.deepEqual(stringify({
    subtype: 'mysubtype'
  }), '//mysubtype', 'should return string with type, id and subtype');
  t.end();
});

test('/id/subtype', function(t) {
  t.deepEqual(stringify({
    id: 'myid',
    subtype: 'mysubtype'
  }), '/myid/mysubtype', 'should return string with type, id and subtype');
  t.end();
});

test('type/id/subtype', function(t) {
  t.deepEqual(stringify({
    type: 'mytype',
    id: 'myid',
    subtype: 'mysubtype'
  }), 'mytype/myid/mysubtype', 'should return string with type, id and subtype');
  t.end();
});


test('/id/subtype/index', function(t) {
  t.deepEqual(stringify({
    id: 'myid',
    subtype: 'mysubtype',
    index: 'myindex'
  }), '/myid/mysubtype/myindex', 'should return string with type, id, subtype and index');
  t.end();
});

test('type//subtype/index', function(t) {
  t.deepEqual(stringify({
    type: 'mytype',
    subtype: 'mysubtype',
    index: 'myindex'
  }), 'mytype//mysubtype/myindex', 'should return string with type, id, subtype and index');
  t.end();
});

test('type///index', function(t) {
  t.deepEqual(stringify({
    type: 'mytype',
    index: 'myindex'
  }), 'mytype///myindex', 'should return string with type, id, subtype and index');
  t.end();
});

test('//subtype/index', function(t) {
  t.deepEqual(stringify({
    subtype: 'mysubtype',
    index: 'myindex'
  }), '//mysubtype/myindex', 'should return string with type, id, subtype and index');
  t.end();
});

test('///index', function(t) {
  t.deepEqual(stringify({
    index: 'myindex'
  }), '///myindex', 'should return string with type, id, subtype and index');
  t.end();
});

test('type/id/subtype/index', function(t) {
  t.deepEqual(stringify({
    type: 'mytype',
    id: 'myid',
    subtype: 'mysubtype',
    index: 'myindex'
  }), 'mytype/myid/mysubtype/myindex', 'should return string with type, id, subtype and index');
  t.end();
});


test('////version', function(t) {
  t.deepEqual(stringify({
    version: 'myversion'
  }), '////myversion', 'should return string with type, id, subtype, index and version');
  t.end();
});

test('type/id/subtype/index/version', function(t) {
  t.deepEqual(stringify({
    type: 'mytype',
    id: 'myid',
    subtype: 'mysubtype',
    index: 'myindex',
    version: 'myversion'
  }), 'mytype/myid/mysubtype/myindex/myversion', 'should return string with type, id, subtype, index and version');
  t.end();
});

test('0/1/2/3/4', function(t) {
  t.deepEqual(stringify({
    type: 0,
    id: 1,
    subtype: 2,
    index: 3,
    version: 4 
  }), '0/1/2/3/4', 'should correctly handle number path fields');
  t.end();
});
