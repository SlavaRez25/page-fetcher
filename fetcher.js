

const request = require('request');
const fs = require('fs');


// assigning the URL to the variable URL and the file path to the variable locFilePath
const URL = process.argv[2];
const locFilePath = process.argv[3];

// using request library to check if URL is correct and if not log an error
request(URL, function(error, response, body){
  if (error){
  console.log('error downloading file: ', error);
  }
});

fs.writeFile(locFilePath, body, error => {
  if (error) {
    console.log('Error writing to file: ', locFilePath);
  } else {
    console.log('Downloaded')
  }
});

console.log(URL);
console.log(locFilePath);

