var test = require('tap').test;
var docuri = require('..');

test('splat parameter', function(t) {
  docuri.route('page/*path', 'page');

  t.deepEqual(docuri.page('page/mypage/otherpage'), { path: ['mypage', 'otherpage'] }, 'parsed page has "parts" set to ["mypage","otherpage"]');
  t.equal(docuri.page({ path: ['mypage', 'otherpage'] }), 'page/mypage/otherpage', 'stringified page results in "page/mypage/otherpage"');

  t.end();
});

