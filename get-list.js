#!/usr/bin/env node
/**
 * Grab the list of protocol numbers from iana
 * and spit out a javascript file to use
 */

var request = require('request');
var xml2js = require('xml2js');
var url = 'http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xml';

var parser = new xml2js.Parser();
var ret = {};

// Get the URL
request(url, function(err, res, body) {
  if (err) throw err;
  if (res.statusCode !== 200)
    throw new Error('Status code: ' + res.statusCode);

  // Parse some XML
  parser.parseString(body, function(err, obj) {
    if (err) throw err;

    // starting point of the protocols
    var base = obj.registry.record;

    base.forEach(function(proto) {
      clean_obj(proto);

      if (!ret[proto.protocol]) ret[proto.protocol] = {};
      ret[proto.protocol][proto.number] = {
        name: proto.name,
        description: proto.description
      };
    });

    // Make the js output and print it
    s = [
      'var services = ' + JSON.stringify(ret, null, 2) + ';',
      'if (module && module.exports) module.exports = services;'
    ].join('\n');
    console.log(s);
  });
});

/**
 * Clean up arbitrary arrays in an obj
 */
function clean_obj(obj) {
  Object.keys(obj).forEach(function(key) {
    if (obj[key].length) obj[key] = obj[key][0];
  });
}
