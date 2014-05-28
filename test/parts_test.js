var test = require('tap').test;
var docuri = require('..');

test('default configuration', function(t) {
  t.deepEqual(docuri(), ['type', 'id', 'subtype', 'index', 'version'], 'should return default parts');
  t.end();
});

test('set configuration', function(t) {
  var parts = ['my', 'parts'];
  t.type(docuri(parts).merge, 'function', 'should return docuri api: merge');
  t.type(docuri(parts).parse, 'function', 'should return docuri api: parse');
  t.type(docuri(parts).stringify, 'function', 'should return docuri api: stringify');
  t.end();
});

test('change configuration', function(t) {
  var parts = ['my', 'parts'];
  docuri(parts);
  t.deepEqual(docuri(), parts, 'should return custom parts');
  t.end();
});

test('use changed configuration', function(t) {
  var parts = ['my', 'parts'];
  t.deepEqual(docuri(parts).parse('one/two'), { my: 'one', parts: 'two'}, 'should use custom parts');
  t.end();
});
