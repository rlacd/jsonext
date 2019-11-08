# JSONext

### Copyright (C) techspider 2019. Licensed under GNU GPLv3.

## What is JSONext?

JSONext (which stands for JSON extended) is a subset of JSON offering support for comments and function serialization. It is currently available in JavaScript and can be used in the browser or as a NodeJS module.

Other programming languages may be targeted at a later stage, although certain features (such as function serialization) may be limited.

## Getting started

Getting started with JSONext is very simple. To install JSONext, clone the repository and reference the JavaScript file using either `require('./jsonext')` (NodeJS) or `<script src="jsonext.js"></script>` (Browser). To verify the installation, you may check for the existence of the `JSONext` object (Browser) or the module exports (NodeJS).

The syntax for JSONext is identical to the syntax of functions in the `JSON` object. It defines standard functions such as `stringify()` and `parse()` with the same arguments, to ensure maximum compatibility.

## Replacing the JSON object with JSONext

In most cases, it is recommended to keep the `JSON` object as is. In some cases, however, the developer may wish to use the JSONext format as the default behavior for JSON.

### Replacing JSON object on browser (strict mode must be disabled)
```js
delete window.JSON;
window.JSON = JSONext;
```

### Replacing JSON object in NodeJS
```js
delete global.JSON;
var global.JSON = JSONext;
```