var test = require('tap').test;
var docuri = require('..');

test('named parameter', function(t) {
  var page = docuri.route('page/:id');

  t.deepEqual(page('page/mypage'), { id: 'mypage' }, 'parsed page has "id" set to "mypage"');
  t.equal(page({ id: 'mypage' }), 'page/mypage', 'stringified page results in "page/mypage"');

  t.end();
});

test('two named parameters', function(t) {
  var content = docuri.route('page/:page_id/content/:id');

  t.deepEqual(content('page/mypage/content/mycontent'), { page_id: 'mypage', id: 'mycontent' }, 'parsed content has "page_id" set to "mypage" and "id" set to "mycontent"');
  t.equal(content({ page_id: 'mypage', id: 'mycontent' }), 'page/mypage/content/mycontent', 'stringified content results in "page/mypage/content/mycontent"');

  t.end();
});

test('named parameter followed by optional parameter', function(t) {
  var page = docuri.route('page/:id(/:optional)');

  t.deepEqual(page('page/mypage'), { id: 'mypage' }, 'parsed page has "id" set to "mypage"');
  t.equal(page({ id: 'mypage', optional: 'number' }), 'page/mypage/number', 'stringified page results in "page/mypage/number"');

  t.end();
});
