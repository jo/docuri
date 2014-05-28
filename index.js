/*
* docuri: Rich document ids for CouchDB.
*
* Copyright (c) 2014 null2 GmbH Berlin
* Licensed under the MIT license.
*/

// type/id/subtype/index/version
var PARTS = ['type', 'id', 'subtype', 'index', 'version'];


exports.parse = function(str) {
  str = str || '';

  return str.split('/').reduce(function(obj, value, i) {
    if (value) {
      obj[PARTS[i]] = value;
    }

    return obj;
  }, {});
};

exports.stringify = function(obj) {
  obj = obj || {};

  return PARTS.map(function(part) {
    return typeof obj[part] === 'undefined' ? '' : obj[part];
  }).join('/').replace(/\/+$/, '');
};

exports.merge = function(str, objToMerge) {
  objToMerge = objToMerge || {};

  var obj = exports.parse(str);

  PARTS.forEach(function(part) {
    if (objToMerge[part]) {
      obj[part] = objToMerge[part];
    }
  });

  return exports.stringify(obj);
};
