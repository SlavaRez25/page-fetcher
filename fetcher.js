

const request = require('request');
const fs = require('fs');


// assigning the URL to the variable URL and the file path to the variable locFilePath
const URL = process.argv[2];
const locFilePath = process.argv[3];

// using request library to check if URL is correct and if not log an error and exit
const grab = function(URL, locFilePath) { 
  request(URL, function(error, response, body) {
    if (error){
      console.log('error downloading file: ', error);
      return;  
    }
 
    // take the body length characters and write it to locFilePath file
    fs.writeFile(locFilePath, body, error => {
      if (error) {
        console.log('Error writing to file: ', locFilePath);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${locFilePath}`);
      }
    });
  });
}
console.log(URL);
console.log(locFilePath);

// grab function which sends the URL(HTTP) request, receives body from response and then write it to local file in your system
grab(URL, locFilePath);
