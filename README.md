# service-names

Service names and ports (from iana.org)

[![npm version](https://img.shields.io/npm/v/service-names.svg?style=flat-square)](https://www.npmjs.org/package/service-names)
[![install size](https://packagephobia.com/badge?p=service-names)](https://packagephobia.com/result?p=service-names)
[![npm downloads](https://img.shields.io/npm/dm/service-names.svg?style=flat-square)](http://npm-stat.com/charts.html?package=service-names)
[![Known Vulnerabilities](https://snyk.io/test/npm/service-names/badge.svg?style=flat-square)](https://snyk.io/test/npm/service-names)

## Installing

Using npm:

```bash
$ npm install service-names
```

Using yarn:

```bash
$ yarn add service-names
```

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/service-names/service-names.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/service-names/service-names.js"></script>
```

## Examples

In Node.js

```js
> const services = require('service-names')
undefined
> services.tcp[80]
{ name: 'www-http',
  description: 'World Wide Web HTTP' }
> services.tcp[22]
{ name: 'ssh',
  description: 'The Secure Shell (SSH) Protocol' }
```

In the Browser

```html
<script src="https://cdn.jsdelivr.net/npm/service-names/service-names.js"></script>
<script>
  alert(services.tcp[80].name); // => 'www-http'
</script>
```

## Up to date list

You can generate an up-to-date list of the protocols. Follow these steps:

    git clone git://github.com/bahamas10/node-service-names.git
    cd node-service-names
    yarn install
    make

This will run the included script `get-list.js` and redirect the output for you

## Installation

    npm install service-names

## License

MIT Licensed
