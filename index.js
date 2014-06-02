/*
* docuri: Rich document ids for CouchDB.
*
* Copyright (c) 2014 null2 GmbH Berlin
* Licensed under the MIT license.
*/

// type/id/subtype/index/version
var DEFINITION = ['type', 'id', 'subtype', 'index', 'version'];
var docuri;

module.exports = exports = docuri = {};

docuri.definition = function(definition) {
  if (definition) {
    DEFINITION = definition;

    return docuri;
  }

  return DEFINITION;
}


docuri.parts = function(obj) {
  if (typeof obj === 'string') {
    obj = docuri.parse(obj);
  }

  var parts = DEFINITION.map(function(part) {
    return obj[part];
  });

  while (parts.length && typeof parts[parts.length - 1] === 'undefined') {
    parts.pop();
  }

  return parts;
};

docuri.parse = function(str) {
  str = str || '';

  return str.split('/').reduce(function(obj, value, i) {
    if (value) {
      obj[DEFINITION[i]] = value;
    }

    return obj;
  }, {});
};

docuri.stringify = function(obj) {
  obj = obj || {};

  return docuri.parts(obj).join('/');
};

docuri.merge = function(obj, objToMerge) {
  objToMerge = objToMerge || {};

  if (typeof obj === 'string') {
    obj = docuri.parse(obj);
  }

  DEFINITION.forEach(function(part) {
    if (objToMerge[part]) {
      obj[part] = objToMerge[part];
    }
  });

  return docuri.stringify(obj);
};

