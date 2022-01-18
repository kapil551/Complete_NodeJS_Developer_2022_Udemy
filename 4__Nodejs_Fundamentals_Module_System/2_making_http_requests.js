// Making a GET Request using https.get() function

const https = require('https');

https.get('https://www.google.com', (res) => {

    res.on('data', (chunk) => {

        console.log(`Data Chunk: ${chunk}`);
    });

    res.on('end', () => {

        console.log('No more data, request has completed 💣💣💣');
    });

});
