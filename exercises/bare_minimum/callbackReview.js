/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
//var readline = require('readline');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      console.log('error', err);
      callback(err, null);
    } else {
      data = data.split("\n");
      console.log(data);
      data.length = 1;
      callback(null, data[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, function(err, response) {
    if (err) {
      console.log('error', err);
      callback(err, null);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
