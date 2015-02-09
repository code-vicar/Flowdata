# Flowdata

A simple javascript client for easy composition of OData queries

## Installation

In the browser 

`bower install flowdata`

or if you're working in node

`npm install flowdata`

## Usage

In the browser a global 'flowdata' object will be created
    
    // ** require for node only
    var flowdata = require('flowdata');
    // **

    var serviceUrl = 'http://services.odata.org/V4/(S(xloriihm0m3y04qekvvc3xg3))/TripPinServiceRW';

    // optionally set a logLevel
    flowdata.Utils.logging.logLevel = flowdata.Utils.logging.logLevels.debug;

    // initiate a new OData service
    flowdata.init(serviceUrl).then(function (service) {
      console.log(service.serviceUrl);
      console.dir(service.metadata);
    }).catch(function(err) {
      console.dir(err);
    });
