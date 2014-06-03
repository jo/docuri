var test = require('tap').test;
var docuri = require('..');

test('named parameter', function(t) {
  docuri.route('page/:id', 'page');

  t.equal(docuri.page('page/mypage', { id: 'otherpage' }), 'page/otherpage', 'merged page has "id" set to "otherpage"');

  t.end();
});

test('optional parameter', function(t) {
  docuri.route('page(/:id)', 'page');

  t.deepEqual(docuri.page('page/mypage'), { id: 'mypage' }, 'parsed page has "id" set to "mypage"');
  t.equal(docuri.page('page/mypage', { id: 'otherpage' }), 'page/otherpage', 'merged page has "id" set to "otherpage"');

  t.end();
});

test('two named parameters', function(t) {
  docuri.route('page/:page_id/content/:id', 'content');

  t.equal(docuri.content('page/mypage/content/mycontent', { id: 'othercontent' }), 'page/mypage/content/othercontent', 'merged content has "id" set to "othercontent"');

  t.end();
});
