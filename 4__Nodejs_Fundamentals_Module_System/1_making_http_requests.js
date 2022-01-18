// Making a GET Request using https.request() function

const https = require('https');

const req = https.request('https://www.google.com', (res) => {

    res.on('data', (chunk) => {

        console.log(`Data Chunk: ${chunk}`);
    });

    res.on('end', () => {

        console.log('No more data, request has completed 💣💣💣');
    });

});

req.end(); //  The end function will cause the request to be sent, trigger the request to be sent by calling the end function.
