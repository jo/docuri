# docuri [![Build Status](https://travis-ci.org/jo/docuri.svg?branch=master)](https://travis-ci.org/jo/docuri)
Rich document ids for CouchDB.

`type/id/subtype/index/version`

eg `movie/blade-runner/gallery-image/12/medium`

## Usage
Parse id string:
```js
require('docuri').parse('mytype/myid/mysubtype/myindex/myversion');
// {
//   type: 'mytype',
//   id: 'myid',
//   subtype: 'mysubtype',
//   index: 'myindex',
//   version: 'myversion'
// }
```

Build id string from object:
```js
require('docuri').stringify({
  type: 'mytype',
  id: 'myid',
  subtype: 'mysubtype',
  index: 'myindex',
  version: 'myversion'
});
// 'mytype/myid/mysubtype/myindex/myversion'
```

Change id string components:
```js
require('docuri').merge('mytype/myid/mysubtype/myindex/myversion', {
  type: 'my_new_type',
});
// 'my_new_type/myid/mysubtype/myindex/myversion'
```

## Browser support
To use docid in your client-side application, browserify it like this:

```shell
browserify -s DocURI path/to/docuri/index.js > path/to/your/assets

```
Once added to your DOM, this will leave you with a global DocURI object for use
in your e.g.  Backbone Models/Collections.

## Development
To run the unit tests:
```shell
npm test
```

For JShint:
```shell
npm run jshint
```

## License
Copyright (c) 2014 Johannes J. Schmidt, null2 GmbH   
Licensed under the MIT license.

