/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promisification = require('./promisification.js');
var pluckFirstLine = require('./promiseConstructor.js');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  //pluckFirstLine.pluckFirstLineFromFileAsync
  //promisification.getGitHubProfileAsync
  //return first line of github profile file
  return pluckFirstLine.pluckFirstLineFromFileAsync(readFilePath)
    .then(function(userName) {
      if (userName) {
        return promisification.getGitHubProfileAsync(userName);
      }
    })
    .then(function(userProfile) {
      fs.writeFileSync(writeFilePath, JSON.stringify(userProfile));
    })
    .catch(function(err) {
      console.log('error', err);
    })
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
