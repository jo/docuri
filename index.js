/*
* docuri
*
* Copyright (c) 2014 null2 GmbH Berlin
* Licensed under the MIT license.
*/

exports.parse = function(str) {
  str = str || '';

  var obj = {};
  var parts = str.split('/');

  var type = parts.shift();
  var id = parts.shift();
  var subtype = parts.shift();
  var version = parts.shift();
  var index = parts.shift();

  if (type) obj.type = type;
  if (id) obj.id = id;
  if (subtype) obj.subtype = subtype;
  if (version) obj.version = version;
  if (index) obj.index = index;

  return obj;
};

exports.stringify = function(obj) {
  obj = obj || {};

  var parts = [];
  if (typeof obj.type !== 'undefined') {
    parts.push(obj.type);
  } else {
    if (obj.id || obj.subtype || obj.version || obj.index) parts.push('');
  }

  if (typeof obj.id !== 'undefined') {
    parts.push(obj.id);
  } else {
    if (obj.subtype || obj.version || obj.index) parts.push('');
  }

  if (typeof obj.subtype !== 'undefined') {
    parts.push(obj.subtype);
  } else {
    if (obj.version || obj.index) parts.push('');
  }
  
  if (typeof obj.version !== 'undefined') {
    parts.push(obj.version);
  } else {
    if (obj.index) parts.push('');
  }

  if (typeof obj.index !== 'undefined') parts.push(obj.index);

  return parts.join('/');
};

exports.merge = function(str, objToMerge) {
  var obj = exports.parse(str);
  for (var prop in objToMerge) {
    if (['type', 'id', 'subtype', 'version', 'index'].indexOf(prop) > -1) {
      obj[prop] = objToMerge[prop];
    }
  }
  return exports.stringify(obj);
};
