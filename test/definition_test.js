var test = require('tap').test;
var definition = require('..').definition;

test('default configuration', function(t) {
  t.deepEqual(definition(), ['type', 'id', 'subtype', 'index', 'version'], 'should return default parts');
  t.end();
});

test('set configuration', function(t) {
  var parts = ['my', 'parts'];
  t.type(definition(parts).merge, 'function', 'should return docuri api: merge');
  t.type(definition(parts).parse, 'function', 'should return docuri api: parse');
  t.type(definition(parts).stringify, 'function', 'should return docuri api: stringify');
  t.end();
});

test('change configuration', function(t) {
  var parts = ['my', 'parts'];
  definition(parts);
  t.deepEqual(definition(), parts, 'should return custom parts');
  t.end();
});

test('use changed configuration', function(t) {
  var parts = ['my', 'parts'];
  t.deepEqual(definition(parts).parse('one/two'), { my: 'one', parts: 'two'}, 'should use custom parts');
  t.end();
});
