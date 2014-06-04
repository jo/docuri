var test = require('tap').test;
var docuri = require('..');

test('named parameter', function(t) {
  docuri.route('page/:id', 'page');

  t.deepEqual(docuri.page('page/mypage'), { id: 'mypage' }, 'parsed page has "id" set to "mypage"');
  t.equal(docuri.page({ id: 'mypage' }), 'page/mypage', 'stringified page results in "page/mypage"');

  t.end();
});

test('two named parameters', function(t) {
  docuri.route('page/:page_id/content/:id', 'content');

  t.deepEqual(docuri.content('page/mypage/content/mycontent'), { page_id: 'mypage', id: 'mycontent' }, 'parsed content has "page_id" set to "mypage" and "id" set to "mycontent"');
  t.equal(docuri.content({ page_id: 'mypage', id: 'mycontent' }), 'page/mypage/content/mycontent', 'stringified content results in "page/mypage/content/mycontent"');

  t.end();
});
