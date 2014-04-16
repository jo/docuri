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


test('/id/subtype/version', function(t) {
  t.deepEqual(stringify({
    id: 'myid',
    subtype: 'mysubtype',
    version: 'myversion'
  }), '/myid/mysubtype/myversion', 'should return string with type, id, subtype and version');
  t.end();
});

test('type//subtype/version', function(t) {
  t.deepEqual(stringify({
    type: 'mytype',
    subtype: 'mysubtype',
    version: 'myversion'
  }), 'mytype//mysubtype/myversion', 'should return string with type, id, subtype and version');
  t.end();
});

test('type///version', function(t) {
  t.deepEqual(stringify({
    type: 'mytype',
    version: 'myversion'
  }), 'mytype///myversion', 'should return string with type, id, subtype and version');
  t.end();
});

test('//subtype/version', function(t) {
  t.deepEqual(stringify({
    subtype: 'mysubtype',
    version: 'myversion'
  }), '//mysubtype/myversion', 'should return string with type, id, subtype and version');
  t.end();
});

test('///version', function(t) {
  t.deepEqual(stringify({
    version: 'myversion'
  }), '///myversion', 'should return string with type, id, subtype and version');
  t.end();
});

test('type/id/subtype/version', function(t) {
  t.deepEqual(stringify({
    type: 'mytype',
    id: 'myid',
    subtype: 'mysubtype',
    version: 'myversion'
  }), 'mytype/myid/mysubtype/myversion', 'should return string with type, id, subtype and version');
  t.end();
});


test('////index', function(t) {
  t.deepEqual(stringify({
    index: 'myindex'
  }), '////myindex', 'should return string with type, id, subtype, version and index');
  t.end();
});

test('type/id/subtype/version/index', function(t) {
  t.deepEqual(stringify({
    type: 'mytype',
    id: 'myid',
    subtype: 'mysubtype',
    version: 'myversion',
    index: 'myindex'
  }), 'mytype/myid/mysubtype/myversion/myindex', 'should return string with type, id, subtype, version and index');
  t.end();
});
