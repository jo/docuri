var test = require('tap').test;
var docuri = require('..');

test('reserved name route', function(t) {
  t.plan(1);

  try {
    docuri.route('page', 'route');
  } catch(e) {
    t.equal(e, 'Reserved name "route" cannot be used.', 'reserved name "route" should throw error');
  }

  t.end();
});

test('reserved name routes', function(t) {
  t.plan(1);

  try {
    docuri.route('page', 'routes');
  } catch(e) {
    t.equal(e, 'Reserved name "routes" cannot be used.', 'reserved name "routes" should throw error');
  }

  t.end();
});
