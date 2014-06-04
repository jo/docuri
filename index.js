/*
* DocURI: Rich document ids for CouchDB.
*
* Copyright (c) 2014 null2 GmbH Berlin
* Licensed under the MIT license.
*/

// type/id/subtype/index/version

var docuri = module.exports = exports = {};

var reservedNames = ['routes', 'route'];

// Cached regular expressions for matching named param parts and splatted parts
// of route strings.
// http://backbonejs.org/docs/backbone.html#section-158
var optionalParam = /\((.*?)\)/g;
var namedParam    = /(\(\?)?:\w+/g;
var splatParam    = /\*\w+/g;
var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

// Convert a route string into a regular expression,
// with named regular expressions for named arguments.
// http://backbonejs.org/docs/backbone.html#section-165
function routeToRegExp(src) {
  var keys = [];

  var route = src.replace(escapeRegExp, '\\$&')
    .replace(optionalParam, '(?:$1)?')
    .replace(namedParam, function(match, optional) {
      keys.push(match);

      return optional ? match : '([^/?]+)';
    })
    .replace(splatParam, function(match) {
      keys.push(match);

      return '([^?]*?)';
    });

  keys = keys.reduce(function(memo, key) {
    var value = '\\' + key;

    memo[key] = new RegExp(value + '(\\/|\\)|\\(|$)');

    return memo;
  }, {});

  return {
    src: src,
    exp: new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$'),
    keys: keys
  }
}

// Given a route and a DocURI return an object of extracted parameters.
// Unmatched DocURIs will be treated as false.
// http://backbonejs.org/docs/backbone.html#section-166
function extractParameters(route, fragment) {
  var params = route.exp.exec(fragment);

  if (!params) {
    return false;
  }

  params = params.slice(1);
      
  return Object.keys(route.keys).reduce(function(memo, key, i) {
    var param = params[i];

    if (param) {
      if (key[0] === '*') {
        param = param.split('/');
      }

      memo[key.substr(1)] = param;
    }

    return memo;
  }, {});
}

// Insert named parameters from object.
function insertParameters(route, obj) {
  var str = route.src;

  Object.keys(route.keys).forEach(function(key) {
    var k = key.substr(1);
    var value = obj[k] || '';

    if (Array.isArray(value)) {
      value = value.join('/');
    }

    str = str.replace(route.keys[key], value + '$1');
  });

  // massage optional parameter
  return str
    .replace(/\(\/\)(\/|$)/g, '$1')
    .replace(/[)(]/g, '');
}


// Map routes
docuri.routes = function(map) {
  Object.keys(map).forEach(function(route) {
    docuri.route(route, map[route]);
  });
};

// Manually bind a single named route
docuri.route = function(route, name) {
  if (reservedNames.indexOf(name) > -1) {
    throw('Reserved name "' + name + '" cannot be used.');
  }

  route = routeToRegExp(route);

  docuri[name] = function(source, target) {
    source = source || {};

    if (target) {
      source = extractParameters(route, source);
      Object.keys(target).forEach(function(key) {
        source[key] = target[key];
      });
    }

    if (typeof source === 'object') {
      return insertParameters(route, source);
    }

    if (typeof source === 'string') {
      return extractParameters(route, source);
    }
  };
};

