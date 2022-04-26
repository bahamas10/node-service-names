#!/usr/bin/env node

/**
 * Grab the list of protocol numbers from iana
 * and spit out a javascript file to use
 */
const axios = require("axios");
const parseString = require("xml2js").parseString;
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const LocalizedFormat = require("dayjs/plugin/localizedFormat");

const serviceNames = {};

/**
 * Clean up arbitrary arrays in an obj
 */
const cleanRecord = (record) => {
  Object.keys(record).forEach((key) => {
    if (record[key].length) record[key] = record[key][0];
  });
};

// Get the URL
const url =
  "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xml";
const iana = axios.create({
  method: "get",
  baseURL: url,
  timout: 300000, // 5 minutes
});

// Get the date of the last update
dayjs.extend(utc);
dayjs.extend(LocalizedFormat);
const lastUpdate = dayjs().utc().format("L");

// GET the list of protocols
(async () => {
  try {
    const { data } = await iana(); // Get the data

    // Parse some XML
    parseString(data, (error, result) => {
      if (error) throw error;

      // starting point of the protocols
      const records = result.registry.record;

      records.forEach((record) => {
        cleanRecord(record);

        if (!serviceNames[record.protocol]) serviceNames[record.protocol] = {};
        serviceNames[record.protocol][record.number] = {
          name: record.name ? record.name : "",
          description: record.description ? record.description : "",
        };
      });

      // Make the js output and print it
      output = [
        `// Last update: ${lastUpdate}`,
        "const services = ",
        JSON.stringify(serviceNames, null, 2),
        ";",
        "module.exports = services",
      ].join("\n");
      console.log(output);
    });
  } catch (error) {
    throw error;
  }
})();
