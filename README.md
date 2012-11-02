IANA service names and ports
============================

Service names and ports (from iana.org)

Usage
-----

In Node.js

``` js
> var services = require('service-names')
undefined
> services.tcp[80]
{ name: 'www-http',
  description: 'World Wide Web HTTP' }
> services.tcp[22]
{ name: 'ssh',
  description: 'The Secure Shell (SSH) Protocol' }
```

In the Browser

```
<script src="service-names.js"></script>
<script>
    alert(services.tcp[80].name); // => 'www-http'
</script>
```

Up to date list
---------------

You can generate an up-to-date list of the protocols.  Follow these steps:

    git clone git://github.com/bahamas10/node-service-names.git
    cd node-service-names
    npm install # for xml2js and request
    make

This will run the included script `get-list.js` and redirect the output for you

Installation
------------

    npm install service-names

License
-------

MIT Licensed
