var test = require('tap').test;
var docuri = require('..');

test('simple route', function(t) {
  docuri.route('page', 'page');

  t.deepEqual(docuri.page('page'), {}, 'parsed page returns empty object');
  t.equal(docuri.page('image'), false, 'parsed image returns false');
  t.equal(docuri.page(), 'page', 'generate page url');

  t.end();
});

