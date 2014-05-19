'use strict';

var test = require('tap').test;
var merge = require('..').merge;

test('changing type component', function(t) {
  t.equal(merge('type/id/subtype/version/index', {type:'new_type'}), 'new_type/id/subtype/version/index', 'should return docuri string with type changed');
  t.end();
});

test('changing id component', function(t) {
  t.equal(merge('type/id/subtype/version/index', {id:'new_id'}), 'type/new_id/subtype/version/index', 'should return docuri string with id changed');
  t.end();
});

test('changing subtype component', function(t) {
  t.equal(merge('type/id/subtype/version/index', {subtype:'new_subtype'}), 'type/id/new_subtype/version/index', 'should return docuri string with subtype changed');
  t.end();
});

test('changing version component', function(t) {
  t.equal(merge('type/id/subtype/version/index', {version:'new_version'}), 'type/id/subtype/new_version/index', 'should return docuri string with version changed');
  t.end();
});

test('changing index component', function(t) {
  t.equal(merge('type/id/subtype/version/index', {index:'new_index'}), 'type/id/subtype/version/new_index', 'should return docuri string with index changed');
  t.end();
});

test('changing unknown component', function(t) {
  t.equal(merge('type/id/subtype/version/index', {unknown:'i dont know'}), 'type/id/subtype/version/index', 'should return unchanged docuri');
  t.end();
});


test('missing second argument', function(t) {
  t.equal(merge('type/id/subtype/version/index'), 'type/id/subtype/version/index', 'should return unchanged docuri string');
  t.end();
});


