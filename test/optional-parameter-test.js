var test = require('tap').test;
var docuri = require('..');

test('optional parameter', function(t) {
  docuri.route('page(/:id)', 'page');

  t.deepEqual(docuri.page('page'), {}, 'parsed page returns empty object');
  t.deepEqual(docuri.page('page/mypage'), { id: 'mypage' }, 'parsed page has "id" set to "mypage"');
  t.equal(docuri.page(), 'page', 'stringified empty page results in "page"');
  t.equal(docuri.page({ id: 'mypage' }), 'page/mypage', 'stringified page results in "page/mypage"');

  t.end();
});

test('surrounded optional parameter', function(t) {
  docuri.route('page(/:id)/suffix', 'page');

  t.deepEqual(docuri.page('page/suffix'), {}, 'parsed page returns empty object');
  t.deepEqual(docuri.page('page/mypage/suffix'), { id: 'mypage' }, 'parsed page has "id" set to "mypage"');
  t.equal(docuri.page(), 'page/suffix', 'stringified empty page results in "page"');
  t.equal(docuri.page({ id: 'mypage' }), 'page/mypage/suffix', 'stringified page results in "page/mypage"');

  t.end();
});
