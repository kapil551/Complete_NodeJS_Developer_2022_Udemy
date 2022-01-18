// This is the top module

const req = require('./req');
const res = require('./res');

/*
    Let's say I want to make a function which allows me to make a "request" against some server to send it some data.
    And this function will take a new URL for the destination that we're making the request against, as well as some data to send that destination.
    And it's going to return the response.
*/

function request(destinationUrl, destinationResponseData) {

    req.send(destinationUrl, destinationResponseData);

    return res.read();
}

const data = request('https://google.com', 'hello');

console.log(`The repsonse data is : ${data}`);
