var test = require('tap').test;
var merge = require('..').merge;

test('changing type component', function(t) {
  t.equal(merge('type/id/subtype/index/version', {type:'new_type'}), 'new_type/id/subtype/index/version', 'should return docuri string with type changed');
  t.end();
});

test('changing id component', function(t) {
  t.equal(merge('type/id/subtype/index/version', {id:'new_id'}), 'type/new_id/subtype/index/version', 'should return docuri string with id changed');
  t.end();
});

test('changing subtype component', function(t) {
  t.equal(merge('type/id/subtype/index/version', {subtype:'new_subtype'}), 'type/id/new_subtype/index/version', 'should return docuri string with subtype changed');
  t.end();
});

test('changing index component', function(t) {
  t.equal(merge('type/id/subtype/index/version', {index:'new_index'}), 'type/id/subtype/new_index/version', 'should return docuri string with index changed');
  t.end();
});

test('changing version component', function(t) {
  t.equal(merge('type/id/subtype/index/version', {version:'new_version'}), 'type/id/subtype/index/new_version', 'should return docuri string with version changed');
  t.end();
});

test('changing unknown component', function(t) {
  t.equal(merge('type/id/subtype/index/version', {unknown:'i dont know'}), 'type/id/subtype/index/version', 'should return unchanged docuri');
  t.end();
});


test('missing second argument', function(t) {
  t.equal(merge('type/id/subtype/index/version'), 'type/id/subtype/index/version', 'should return unchanged docuri string');
  t.end();
});


